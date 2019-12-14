const mongoose = require('mongoose');

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

compraSchema.pre(/^find/, function(next) {
  this.populate('usuario').populate('carrito');
  next();
});

const Compra = mongoose.model('Compra', compraSchema);

module.exports = Compra;
