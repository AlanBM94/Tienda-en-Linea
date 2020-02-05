const multer = require('multer');
const sharp = require('sharp');
const Usuario = require('../models/usuarioModel.js');
const Compra = require('../models/compraModel');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');
const Email = require('../utils/email');

// const multerAlmacenamiento = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/images/usuarios');
//   },
//   filename: (req, file, cb) => {
//     const extension = file.mimetype.split('/')[1];
//     cb(null, `usuario-${req.usuario.id}-${Date.now()}.${extension}`);
//   }
// });

const multerAlmacenamiento = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('No es una imagen, por favor sube solo imagenes', 400),
      false
    );
  }
};

const upload = multer({
  storage: multerAlmacenamiento,
  fileFilter: multerFilter
});

exports.obtenerUsuarios = catchAsync(async (req, res, next) => {
  res.status(500).json({
    mensaje: 'Esta ruta aún no ha sido definida'
  });
});

exports.miPerfil = (req, res, next) => {
  req.params.id = req.usuario.id;
  next();
};

const filtrarObjeto = (objeto, ...permitidos) => {
  const nuevoObjeto = {};
  Object.keys(objeto).forEach(el => {
    if (permitidos.includes(el)) nuevoObjeto[el] = objeto[el];
  });
  return nuevoObjeto;
};

exports.actualizarMiFoto = upload.single('foto');

exports.ajustarTamañoFoto = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next();
  }
  req.file.filename = `usuario-${req.usuario.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/images/usuarios/${req.file.filename}`);
  next();
});

exports.actualizarMiPerfil = catchAsync(async (req, res, next) => {
  if (req.body.contraseña || req.body.confirmarContraseña) {
    return next(
      new AppError('Esta no es la ruta para actualizar contraseñas', 400)
    );
  }

  const cuerpoFiltrado = filtrarObjeto(req.body, 'email', 'nombre');
  if (req.file) {
    cuerpoFiltrado.foto = req.file.filename;
  }
  const usuarioActualizado = await Usuario.findByIdAndUpdate(
    req.usuario.id,
    cuerpoFiltrado,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'Exito',
    data: {
      usuarioActualizado
    }
  });
});

exports.eliminarMiPerfil = catchAsync(async (req, res, next) => {
  await Usuario.findByIdAndUpdate(req.usuario.id, {
    activo: false
  });
  res.status(204).json({
    status: 'Exito',
    data: null
  });
});

exports.obtenerUsuario = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  if (!usuario) {
    return next(new AppError('Ningún usuario fue encontrado con ese id', 404));
  }
  res.status(200).json({
    status: 'Exito',
    data: {
      usuario
    }
  });
});

exports.obtenerUsuarios = catchAsync(async (req, res, next) => {
  const usuarios = await Usuario.find({ rol: 'usuario' });
  res.status(200).json({
    status: 'Exito',
    data: {
      usuarios
    }
  });
});

exports.actualizarUsuario = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const actualizaciones = req.body;
  const usuarioActualizado = await Usuario.findByIdAndUpdate(
    id,
    actualizaciones,
    { new: true, runValidators: true }
  );
  if (!usuarioActualizado) {
    return next(new AppError('No se pudo actualizar ese usuario', 404));
  }
  res.status(200).json({
    satus: 'Exito',
    data: {
      usuarioActualizado
    }
  });
});

exports.eliminarUsuario = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const usuarioEliminado = await Usuario.findOneAndDelete(id);
  if (!usuarioEliminado) {
    return next(new AppError('Ningún usuario fue encontrado con ese id', 404));
  }
  res.status(204).json({
    status: 'Exito',
    data: null
  });
});

exports.verificarSiUsuarioEsPremium = catchAsync(async (req, res, next) => {
  console.log('estas dentro');
  if (req.usuario) {
    const idUsuario = req.usuario._id;
    const compras = await Compra.find({ usuario: idUsuario });
    const { usuario } = req;
    const resetURL = `${req.protocol}://${req.get('host')}/`;
    if (compras.length >= 5) {
      await Usuario.findByIdAndUpdate(
        idUsuario,
        { premium: true },
        { new: true, runValidators: true }
      );
    }
    console.log(compras.length);
    if (compras.length === 11)
      await new Email(usuario, resetURL).enviarConfirmacionUsuarioPremium();
    res.redirect(req.originalUrl.split('?')[0]);
  } else {
    res.redirect(req.originalUrl.split('?')[0]);
  }
});
