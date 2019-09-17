const Producto = require('../models/productoModel');
const Usuario = require('../models/usuarioModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.principal = (req, res, next) => {
  res.status(200).render('home');
};

exports.categoriaSeleccionada = categoria => {
  if (categoria === 'Hogar') categoria = 'Hogar y cocina';
  if (categoria === 'Ropa') categoria = 'Ropa y Accesorios';
  return (req, res, next) => {
    req.params.categoria = categoria;
    next();
  };
};

// Muestra los producos según su categoría
exports.buscarCategoria = catchAsync(async (req, res) => {
  const categoria = req.params.categoria;
  const productos = await Producto.find({ categoria });
  res.status(200).render('tienda/categoria', {
    categoria,
    productos
  });
});
