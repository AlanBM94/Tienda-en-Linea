const Producto = require('../models/productoModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APICaracteristicas = require('../utils/caracteristicasBusqueda');

exports.obtenerProducto = catchAsync(async (req, res, next) => {
  // .populate('reseñas') permite el virtual populate
  const producto = await Producto.findById(req.params.id).populate('reseñas');
  if (!producto) {
    return next(new AppError('No se encontró producto con ese id', 404));
  }

  res.status(200).json({
    status: 'Exito',
    producto
  });
});

exports.obtenerProductos = catchAsync(async (req, res, next) => {
  const caracteristicas = new APICaracteristicas(Producto.find(), req.query)
    .filtrar()
    .ordenar()
    .paginacion()
    .categoria();

  const productos = await caracteristicas.consulta;

  res.status(200).json({
    status: 'Exito',
    productos
  });
});

exports.crearProducto = catchAsync(async (req, res, next) => {
  const producto = await Producto.create(req.body);
  res.status(201).json({
    status: 'Exito',
    data: {
      producto
    }
  });
});

exports.modificarProducto = catchAsync(async (req, res, next) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true
  });

  if (!producto) {
    return next(new AppError('No se encontró producto con ese id', 404));
  }

  res.status(200).json({
    status: 'Exito',
    data: {
      producto
    }
  });
});

exports.eliminarProducto = catchAsync(async (req, res, next) => {
  const producto = await Producto.findByIdAndDelete(req.params.id);
  if (!producto) {
    return next(new AppError('No se encontró producto con ese id', 404));
  }
  res.status(204).json({
    status: 'Exito',
    data: null
  });
});
