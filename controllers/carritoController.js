const Carrito = require('../models/carritoModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// exports.establecerIdUsuario = (req, res, next) => {
//   if (!req.body.usuario) req.body.usuario = req.usuario.id;
//   next();
// };

// Si existe res.locals.usuario crea un carrito en res.locals
exports.obtenerCarritoLocals = async (req, res, next) => {
  if (res.locals.usuario) {
    const carrito = await Carrito.findOne({ usuario: res.locals.usuario._id });
    res.locals.carrito = carrito;
    next();
  } else {
    next();
  }
};

exports.obtenerCarrito = catchAsync(async (req, res, next) => {
  const carrito = await Carrito.findOne({ usuario: req.usuario._id });
  if (!carrito) {
    return res.status(200).render('tienda/carritoVacio');
  }
  res.locals.carrito = carrito;
  const productosCarrito = carrito.productos;
  res.status(200).render('tienda/carrito', {
    carrito,
    productosCarrito
  });
});

exports.crearCarrito = catchAsync(async (req, res, next) => {
  // Declara el nuevo
  let carrito;
  // Busca un carrito viejo por el Id del Usuario
  const carritoViejo = await Carrito.findOne({ usuario: req.usuario._id });
  if (carritoViejo === null) {
    const usuario = req.usuario._id;
    carrito = await Carrito.create({
      usuario,
      productos: [],
      total: 0
    });
    req.carrito = carrito;
  } else {
    req.carrito = carritoViejo;
  }
  next();
});

exports.agregarAlCarrito = catchAsync(async (req, res, next) => {
  const producto = req.body;
  const carritoActualizado = await Carrito.findByIdAndUpdate(
    req.carrito.id,
    {
      $push: { productos: producto }
    },
    { new: true, runValidators: true }
  );

  if (!carritoActualizado) {
    return next(new AppError('No se encontró ningún carrito con ese Id', 404));
  }

  // Calcula el total del carrito
  carritoActualizado.calcularTotal();
  res.status(200).json({
    status: 'Exito',
    data: {
      carritoActualizado
    }
  });
});

exports.eliminarProductoDelCarrito = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const carrito = await Carrito.findOneAndUpdate(
    { usuario: req.usuario._id },
    { $pull: { productos: { _id: id } } },
    { new: true }
  );

  // Calcula el total del carrito
  carrito.calcularTotal();
  res.status(200).json({
    status: 'Exito',
    data: {
      carrito
    }
  });
});
