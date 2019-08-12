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
    status: 'Exito',
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

exports.obtenerUsuarios = catchAsync(async (req, res, next) => {
  const usuarios = await Usuario.find({ rol: 'usuario' });
  res.status(200).json({
    status: 'Exito',
    data: {
      usuarios
    }
  });
});

exports.obtenerUsuarioDesdeAdmin = catchAsync(async (req, res, next) => {
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
