// const Usuario = require('../models/usuarioModel.js');
const catchAsync = require('../utils/catchAsync.js');
// const AppError = require('../utils/appError.js');

exports.obtenerUsuarios = catchAsync(async (req, res, next) => {
  res.status(500).json({
    mensaje: 'Esta ruta aún no ha sido definida'
  });
});
