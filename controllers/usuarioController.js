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
