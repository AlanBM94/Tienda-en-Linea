const mongoose = require('mongoose');

const Producto = require('./productoModel');

const compraSchema = mongoose.Schema({
  productos: [],
  usuario: {
    type: mongoose.Schema.ObjectId,
    ref: 'Usuario',
    required: [true, 'La compra debe de pertenecer a un usuario']
  },
  precio: {
    type: Number,
    require: [true, 'La compra debe de tener un precio']
  },
  fecha: {
    type: Date,
    default: Date.now()
  }
});

compraSchema.methods.actualizarNumeroDeVentas = async function(carrito) {
  carrito.productos.map(async producto => {
    const productoOriginal = await Producto.find({ nombre: producto.articulo });
    await Producto.findByIdAndUpdate(productoOriginal[0]._id, {
      numeroVentas: productoOriginal[0].numeroVentas + producto.cantidad
    });
  });
};

compraSchema.pre(/^find/, function(next) {
  this.populate('usuario').populate('carrito');
  next();
});

const Compra = mongoose.model('Compra', compraSchema);

module.exports = Compra;
