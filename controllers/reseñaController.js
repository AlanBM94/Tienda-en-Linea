const Reseña = require('../models/reseñaModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.establecerIdUsuario = (req, res, next) => {
  if (!req.body.producto) req.body.producto = req.params.id;
  if (!req.body.usuario) req.body.usuario = req.usuario.id;
  next();
};

exports.crearReseña = catchAsync(async (req, res, next) => {
  const reseña = await Reseña.create(req.body);
  res.status(201).json({
    status: 'Exito',
    data: {
      reseña
    }
  });
});

exports.obtenerReseñas = catchAsync(async (req, res, next) => {
  const reseñas = await Reseña.find({ producto: req.params.id });
  res.status(200).json({
    status: 'Exito',
    data: {
      reseñas
    }
  });
});

exports.actualizarReseña = catchAsync(async (req, res, next) => {
  const actualizaciones = req.body;

  const reseñaActualizada = await Reseña.findByIdAndUpdate(
    req.params.id,
    actualizaciones,
    { new: true, runValidators: true }
  );

  // Si el usuario del token que quiere eliminar la reseña es el mismo que quien creo la reseña se permite actualizar la reseña
  if (req.usuario.id == reseñaActualizada.usuario._id) {
    res.status(200).json({
      status: 'Exito',
      data: {
        reseñaActualizada
      }
    });
  } else {
    return next(
      new AppError('No tienes los permisos para realizar esta acción', 401)
    );
  }
});

exports.eliminarReseña = catchAsync(async (req, res, next) => {
  const reseña = await Reseña.find({ _id: req.params.id });
  // Si el usuario del token que quiere eliminar la reseña es el mismo que quien creo la reseña se permite eliminar la reseña
  if (req.usuario.id == reseña[0].usuario._id) {
    await Reseña.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'Exito',
      data: null
    });
  } else {
    return next(
      new AppError('No tienes los permisos para realizar esta acción', 401)
    );
  }
});
