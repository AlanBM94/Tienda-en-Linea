// const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
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
  const usuario = await Usuario.create(req.body);
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

exports.permitirPara = rol => {
  return (req, res, next) => {
    if (req.usuario.rol !== rol) {
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
exports.estaLogeado = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificado = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      const usuarioActual = await Usuario.findById(decodificado.id);
      if (!usuarioActual) {
        return next();
      }
      res.locals.usuario = usuarioActual;
      return next();
    } catch (error) {
      return next();
    }
  }
  next();
};
