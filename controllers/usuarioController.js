const Usuario = require('../models/usuarioModel.js');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');

exports.obtenerUsuarios = catchAsync(async (req, res, next) => {
  res.status(500).json({
    mensaje: 'Esta ruta aún no ha sido definida'
  });
});

exports.miPerfil = (req, res, next) => {
  req.params.id = req.usuario.id;
  next();
};

exports.obtenerUsuario = catchAsync(async (req, res, next) => {
  const query = Usuario.findById(req.params.id);
  const usuario = await query;
  if (!usuario) {
    return next(new AppError('Ningún usuario fue encontrado con ese Id', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      usuario
    }
  });
});

const filtrarObjeto = (objeto, ...permitidos) => {
  const nuevoObjeto = {};
  Object.keys(objeto).forEach(el => {
    if (permitidos.includes(el)) nuevoObjeto[el] = objeto[el];
  });
  return nuevoObjeto;
};

exports.actualizarMiPerfil = catchAsync(async (req, res, next) => {
  if (req.body.contraseña || req.body.confirmarContraseña) {
    return next(
      new AppError('Esta no es la ruta para actualizar contraseñas', 400)
    );
  }
  const cuerpoFiltrado = filtrarObjeto(req.body, 'email', 'nombre');
  const usuarioActualizado = await Usuario.findByIdAndUpdate(
    req.usuario.id,
    cuerpoFiltrado,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'exito',
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
    status: 'exito',
    data: null
  });
});
