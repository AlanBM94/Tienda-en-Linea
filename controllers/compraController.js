const stripe = require('stripe')('sk_test_aX5uThJUB2R6tw70TbVPbiZD00TNRhCnTk');
const Carrito = require('../models/carritoModel');
const Compra = require('../models/compraModel');
const catchAsync = require('../utils/catchAsync');
const Usuario = require('../models/usuarioModel.js');
const Email = require('../utils/email');

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

  // Enviarla al cliente en la respuesta
  res.status(200).json({
    status: 'Exito',
    session
  });
});

const elegirCorreo = catchAsync(async (usuario, url, tipo) => {
  if (tipo === 'usuarioPremium') {
    await new Email(usuario, url).enviarConfirmacionUsuarioPremium();
  } else if (tipo === 'nuevaCompra') {
    await new Email(usuario, url).enviarMensajeNuevaCompra();
  }
});

const enviarCorreo = catchAsync(async (idUsuario, req, tipo) => {
  const usuario = await Usuario.findById(idUsuario);
  const resetURL = `${req.protocol}://${req.get('host')}/`;
  elegirCorreo(usuario, resetURL, tipo);
});

const verificarSiUsuarioEsPremium = catchAsync(async (idUsuario, req) => {
  if (idUsuario) {
    const compras = await Compra.find({ usuario: idUsuario });
    if (compras.length === 5) {
      enviarCorreo(idUsuario, req, 'usuarioPremium');
      await Usuario.findByIdAndUpdate(
        idUsuario,
        { premium: true },
        { new: true, runValidators: true }
      );
    }
  }
});

const actualizarCarrito = catchAsync(async (infoCarrito, req) => {
  const { carrito, usuario, nuevaCompra } = infoCarrito;
  const carritoProductos = await Carrito.findById(carrito);
  await Compra.findByIdAndUpdate(nuevaCompra.id, {
    productos: carritoProductos.productos
  });
  await Carrito.findOneAndUpdate(
    { usuario },
    { $pull: { productos: {} } },
    { multi: true }
  );
  await Carrito.findByIdAndUpdate(carrito, { total: 0 });
  verificarSiUsuarioEsPremium(usuario, req);
});

// Crea una nueva compra
exports.crearCompraCheckout = catchAsync(async (req, res, next) => {
  // FIXME: esto es temporal porque todos pueden hacer compras sin pagar, se solucionara en producción
  const { carrito, usuario, precio } = req.query;
  if (!carrito && !usuario && !precio) return next();
  const nuevaCompra = await Compra.create({ carrito, usuario, precio });
  if (nuevaCompra) {
    const infoCarrito = { carrito, usuario, nuevaCompra };
    actualizarCarrito(infoCarrito, req);
  }
  enviarCorreo(usuario, req, 'nuevaCompra');
  // Crea una nueva petición a esta url
  res.redirect(`${req.protocol}://${req.get('host')}/misCompras`);
});

exports.obtenerCompras = catchAsync(async (req, res, next) => {
  const compras = await Compra.find({ usuario: req.params.id });
  res.status(200).json({
    status: 'Exito',
    compras
  });
});

exports.obtenerCompra = catchAsync(async (req, res, next) => {
  const compra = await Compra.findById(req.params.id);
  if (!compra) {
    return next('No se encontro ninguna compra con ese id', 404);
  }
  res.json({
    status: 'Exito',
    data: compra
  });
});
