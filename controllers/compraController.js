const stripe = require('stripe')('sk_test_aX5uThJUB2R6tw70TbVPbiZD00TNRhCnTk');
const Carrito = require('../models/carritoModel');
const Compra = require('../models/compraModel');
const Producto = require('../models/productoModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Le da formato a la fecha
const formatoFecha = fecha => {
  const nombresMes = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  const dia = fecha.getDate();
  const indiceMes = fecha.getMonth();
  const año = fecha.getFullYear();
  return `${dia} de ${nombresMes[indiceMes]} del ${año}`;
};

// Mensaje si es un producto o varios
const cantidadProductos = numero =>
  numero === 1 ? 'producto adquirido' : 'productos adquiridos';

// Le resta al stock la cantidad de los productos comprados
const restarStock = async (cantidad, slugProducto) => {
  const producto = await Producto.findOne({ slug: slugProducto });
  const nuevaStock = producto.stock - cantidad;
  await Producto.findByIdAndUpdate(producto._id, { stock: nuevaStock });
};

// Actualiza el stock de la tienda
const actualizarStock = catchAsync(async idCarrito => {
  const carrito = await Carrito.findById(idCarrito);
  await Promise.all(
    carrito.productos.map(async producto => {
      await restarStock(producto.cantidad, producto.slug);
    })
  );
});

exports.obtenerCheckoutSession = catchAsync(async (req, res, next) => {
  // Obtener el carrito
  const carrito = await Carrito.findById(req.params.carritoID);
  const fecha = formatoFecha(new Date());

  // Crear el checkout session
  const session = await stripe.checkout.sessions.create({
    // Información de la session
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/?carrito=${
      req.params.carritoID
    }&usuario=${req.usuario.id}&precio=${carrito.total}`,
    cancel_url: `${req.protocol}://${req.get('host')}/carrito/ver`,
    customer_email: req.usuario.email,
    client_reference_id: req.params.carritoID,
    // Información del carrito que se va a pagar
    line_items: [
      {
        name: `${carrito.productos.length} ${cantidadProductos(
          carrito.productos.length
        )}`,
        description: `Compra realizada el ${fecha}`,
        images: [
          'https://my.mhaus.org/global_graphics/default-store-350x350.jpg'
        ],
        amount: carrito.total * 100,
        currency: 'mxn',
        quantity: 1
      }
    ]
  });

  // Actualiza el stock de la tienda
  // TODO: actualizar el stock de la tinda
  // actualizarStock(carrito);

  // Enviarla al cliente en la respuesta
  res.status(200).json({
    status: 'Exito',
    session
  });
});

// Crea una nueva compra
exports.crearCompraCheckout = catchAsync(async (req, res, next) => {
  // FIXME: esto es temporal porque todos pueden hacer compras sin pagar, se solucionara en producción
  const { carrito, usuario, precio } = req.query;
  if (!carrito && !usuario && !precio) {
    return next();
  }
  const nuevaCompra = await Compra.create({ carrito, usuario, precio });
  if (nuevaCompra) {
    // Actualiza el stock de la tienda
    await actualizarStock(carrito);
    // Eliminar los productos del carrito
    await Carrito.findOneAndUpdate(
      { usuario },
      { $pull: { productos: {} } },
      { multi: true }
    );
    // Actualiza el total del carrito
    await Carrito.findByIdAndUpdate(carrito, { total: 0 });
  }
  // Crea una nueva petición a esta url
  res.redirect(req.originalUrl.split('?')[0]);
});
