// const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Email = require('../utils/email');
const Usuario = require('./../models/usuarioModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const firmarToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const enviarToken = (usuario, statusCodigo, res) => {
  const token = firmarToken(usuario.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);
  usuario.contraseña = undefined;
  res.status(statusCodigo).json({
    status: 'Exito',
    token,
    data: {
      usuario
    }
  });
};

exports.registrarse = catchAsync(async (req, res, next) => {
  console.log(req);
  const usuario = await Usuario.create(req.body);
  const url = `${req.protocol}://${req.get('host')}/perfil`;
  await new Email(usuario, url).sendWelcome();
  enviarToken(usuario, 201, res);
});

exports.iniciarSesion = catchAsync(async (req, res, next) => {
  const { email, contraseña } = req.body;
  // Si no existe email ó contraseña crea un nuevo error
  if (!email || !contraseña) {
    return new AppError('Ingresa tu email y contraseña', 400);
  }
  // Crea al usuario a partir del email y selecciona la contraseña (porque la contraseña no se muestra en la respuesta del servidor, eso se establecio desde el modelo)para compararla con el metodo contraseñaCorrecta
  const usuario = await Usuario.findOne({ email }).select('+contraseña');
  // Si no existe usuario con ese email o la contraseña es incorrecta crea un nuevo error
  if (
    !usuario ||
    !(await usuario.contraseñaCorrecta(contraseña, usuario.contraseña))
  ) {
    return next(new AppError('Email o contraseña incorrectos', 401));
  }
  // Envia la token del servidor al cliente
  enviarToken(usuario, 200, res);
});

exports.proteger = catchAsync(async (req, res, next) => {
  let token;
  // Si la token esta en los headers y empieza con Bearer la token se asigna desde los headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    // Si la token esta en los cookies se asigna desde ahí
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  // Si no hay token no está el usuario no ha iniciado sesión
  if (!token) {
    return next(
      new AppError('No has iniciado sesión, por favor inicia sesión', 401)
    );
  }
  // Los valores decodificados del token se asignan a decodificado y lo compara con el process.env.JWT_SECRET para ver si el token pertenece a un usuario o ha sido modificado
  const decodificado = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // A partir del id de la variable decodificado se encuentra al usuario que corresponde al token
  const usuarioActual = await Usuario.findById(decodificado.id);
  if (!usuarioActual) {
    return next(
      new AppError('El usuario que pertenece a esta token no existe', 401)
    );
  }

  req.usuario = usuarioActual;
  res.locals.usuario = usuarioActual;
  next();
});

exports.permitirPara = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.usuario.rol)) {
      return next(
        new AppError(
          'No tienes los permisos necesatios para realizar está acción',
          403
        )
      );
    }
    next();
  };
};

// Verifica que el usuario este logeado
exports.usuarioEstaLogeado = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificado = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const usuarioActual = await Usuario.findById(decodificado.id);

      if (!usuarioActual) {
        return next(new AppError('Tienes que iniciar sesión', 401));
      }

      res.locals.usuario = usuarioActual;
      req.usuario = usuarioActual;

      return next();
    } catch (error) {
      return next();
    }
  }
  next();
};

exports.actualizarContrasenia = catchAsync(async (req, res, next) => {
  const usuario = await Usuario.findById(req.usuario.id).select('+contraseña');
  if (
    !(await usuario.contraseñaCorrecta(
      req.body.contraseñaActual,
      usuario.contraseña
    ))
  ) {
    return next(new AppError('Tu contraseña actual no es válida', 401));
  }

  usuario.contraseña = req.body.contraseñaNueva;
  usuario.confirmarContraseña = req.body.confirmarContraseña;
  await usuario.save();

  // Log usuario in, send jwt
  enviarToken(usuario, 200, res);
});

exports.recuperarContrasenia = catchAsync(async (req, res, next) => {
  const usuario = await Usuario.findOne({ email: req.body.email });

  if (!usuario) {
    return next(new AppError('No existe un usuario con ese id', 404));
  }

  const resetToken = usuario.crearTokenRecuperarContrasenia();

  await usuario.save({ validateBeforeSave: false });

  try {
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/resetearContrasenia/${resetToken}`;

    await new Email(usuario, resetURL).enviarRecuperarContrasenia();

    res.status(200).json({
      status: 'success',
      message: 'Token enviada a email!'
    });
  } catch (err) {
    usuario.passwordResetToken = undefined;
    usuario.passwordResetExpires = undefined;
    await usuario.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'Hubo un problema al mandar el correo, por favor intente más tarde'
      ),
      500
    );
  }
});

exports.resetearContrasenia = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const usuario = await Usuario.findOne({
    recuperarContraseñaToken: hashedToken,
    recuperarContraseñaExpira: { $gt: Date.now() }
  });

  if (!usuario) {
    return next(new AppError('La token no es válida o ya ha expirado', 400));
  }

  usuario.contraseña = req.body.contraseña;
  usuario.confirmarContraseña = req.body.confirmarContraseña;
  usuario.recuperarContraseñaToken = undefined;
  usuario.recuperarContraseñaExpira = undefined;

  await usuario.save();

  enviarToken(usuario, 200, res);
});

exports.cerrarSesion = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() * 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ status: 'Exito' });
};
