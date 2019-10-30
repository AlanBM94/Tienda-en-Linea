const Carrito = require('../models/carritoModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Producto = require('../models/productoModel');

// Le resta al stock la cantidad de los productos comprados
const restarStock = catchAsync(async (cantidad, slugProducto) => {
  const producto = await Producto.findOne({ slug: slugProducto });
  const nuevoStock = producto.stock - cantidad;
  await Producto.findByIdAndUpdate(producto._id, { stock: nuevoStock });
});

// Le suma al stock la cantidad del producto que se elimina del carrito
const sumarStock = catchAsync(async (nombreProducto, cantidadProducto) => {
  const producto = await Producto.findOne({ nombre: nombreProducto });
  const stockNuevo = producto.stock + cantidadProducto;
  await Producto.findByIdAndUpdate(producto.id, { stock: stockNuevo });
});

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
  res.status(200).json({
    status: 'Exito',
    carrito
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

// Agrega el producto al carrito
exports.agregarAlCarrito = catchAsync(async (req, res, next) => {
  const producto = req.body;
  // Actualiza el stock de la tienda
  await restarStock(producto.cantidad, producto.slug);
  // Se agrega el nuevo producto al carrito de compras
  const carritoActualizado = await Carrito.findByIdAndUpdate(
    req.carrito.id,
    {
      $push: { productos: producto }
    },
    { new: true, runValidators: true }
  );

  // Si no hay un carrito actualizado lanza un error
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
  // El id pertenece al producto que se va a eliminar
  const { id } = req.params;
  const { cantidad, nombre } = req.body;
  // Se vuelve a sumar la cantidad del producto al stock del mismo
  await sumarStock(nombre, cantidad);
  // Se elimina el producto del carrito de compras
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
