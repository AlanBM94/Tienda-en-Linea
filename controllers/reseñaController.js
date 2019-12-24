const { ObjectId } = require('mongoose').Types;
const Reseña = require('../models/reseñaModel');
const Compra = require('../models/compraModel');
const Carrito = require('../models/carritoModel');
const Producto = require('../models/productoModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.establecerIdUsuario = (req, res, next) => {
  if (!req.body.producto) req.body.producto = req.params.id;
  if (!req.body.usuario) req.body.usuario = req.usuario.id;
  next();
};

exports.permitirHacerReseñaUsuario = catchAsync(async (req, res, next) => {
  let permiso = false;

  const comprasUsuario = await Compra.find({
    usuario: req.usuario.id
  });

  const { producto } = req.body;

  const productoReseña = await Producto.findById(producto);

  await Promise.all(
    comprasUsuario.map(compra => {
      compra.productos.map(productoCompra => {
        if (productoReseña.nombre === productoCompra.articulo) permiso = true;
      });
      return Carrito.findById(compra.carrito);
    })
  );

  if (!permiso) {
    return next(
      new AppError('Debes de comprar el producto antes de hacer la reseña')
    );
  }
  next();
});

exports.crearReseña = catchAsync(async (req, res, next) => {
  const reseña = await Reseña.create(req.body);
  res.status(201).json({
    status: 'Exito',
    data: {
      reseña
    }
  });
});

exports.obtenerReseña = catchAsync(async (req, res, next) => {
  const reseña = await Reseña.findById(req.params.id);
  if (!reseña) {
    return next('No se encontro una reseña con ese id', 400);
  }
  res.status(200).json({
    status: 'Exito',
    data: {
      reseña
    }
  });
});

const obtenerReseñasDesde = async (req, parametro) => {
  let reseñas;
  if (parametro === 'producto') {
    reseñas = await Reseña.find({ producto: req.params.id });
  } else if (parametro === 'usuario') {
    reseñas = await Reseña.find({ usuario: req.params.id });
  }
  return reseñas;
};

exports.obtenerReseñas = catchAsync(async (req, res, next) => {
  const reseñas = await obtenerReseñasDesde(req, 'producto');
  res.status(200).json({
    status: 'Exito',
    data: {
      reseñas
    }
  });
});

exports.obtenerReseñasDesdeUsuario = catchAsync(async (req, res, next) => {
  const reseñas = await obtenerReseñasDesde(req, 'usuario');
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
