const Producto = require('../models/productoModel');
const Usuario = require('../models/usuarioModel');
const Carrito = require('../models/carritoModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');

const generarTemplates = (tipo, respuesta) =>
  respuesta.status(200).render(tipo);

const configurarCategoria = categoria => {
  if (categoria === 'electronica') return 'Electrónica';
  if (categoria === 'hogarYCocina') return 'Hogar y cocina';
  if (categoria === 'deportes') return 'Deportes';
  if (categoria === 'ropaYAccesorios') return 'Ropa y Accesorios';
  if (categoria === 'herramientas') return 'Herramientas';
};

exports.principal = (req, res, next) => {
  generarTemplates('home', res);
};

exports.registrarseTemplate = (req, res, next) => {
  generarTemplates('tienda/registrarse', res);
};

exports.iniciarSesionTemplate = (req, res, next) => {
  generarTemplates('tienda/iniciarSesion', res);
};

exports.recuperarContrasenia = (req, res, next) => {
  generarTemplates('tienda/recuperarContrasenia', res);
};

exports.resetearContrasenia = (req, res, next) => {
  generarTemplates('tienda/resetearContrasenia', res);
};

exports.obtenerCategoria = catchAsync(async (req, res, next) => {
  // Obtiene la categoría de la url y la modifica para obtener los productos
  const categoria = configurarCategoria(req.url.split('/')[1]);
  const productos = await Producto.find({ categoria });
  res.status(200).render('tienda/categoria', {
    productos,
    categoria
  });
});

exports.obtenerProducto = catchAsync(async (req, res, next) => {
  const producto = await Producto.findById(req.params.id).populate('reseñas');
  const { reseñas, imagenes } = producto;
  let stock = false;
  if (producto.stock > 0) {
    stock = producto;
  }
  res.status(200).render('tienda/producto', {
    producto,
    imagenes,
    reseñas,
    stock
  });
});

exports.obtenerCarrito = catchAsync(async (req, res, next) => {
  const idUsuario = req.usuario._id;
  const carrito = await Carrito.findOne({ usuario: idUsuario });
  const { usuario } = req;
  if (!carrito) {
    res.status(200).render('tienda/carritoVacio');
  } else {
    const productosCarrito = carrito.productos;
    res.status(200).render('tienda/carrito', {
      carrito,
      usuario,
      productosCarrito
    });
  }
});

exports.perfilTemplate = (req, res, next) => {
  res.status(200).render('tienda/perfil', {
    usuario: req.usuario
  });
};

exports.misComprasTemplate = (req, res, next) => {
  res.status(200).render('tienda/misCompras');
};

exports.misReseñasTemplate = (req, res, next) => {
  res.status(200).render('tienda/misReseñas');
};
