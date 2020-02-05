const mongoose = require('mongoose');
// const productoSchema = require('./productoModel').schema;

const carritoSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.ObjectId,
      ref: 'Usuario',
      required: [true, 'El carrito debe de pertenecer a un usuario']
    },
    productos: [
      {
        articulo: String,
        categoria: String,
        descripcion: String,
        precio: Number,
        imagen: String,
        cantidad: {
          type: Number,
          default: 1,
          min: 1,
          max: 10
        },
        slug: String,
        stock: Number
      }
    ],
    total: {
      type: Number,
      min: 0
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const calcularTotal = productos => {
  // Cada vez que se llama este metodo se vuelve a inicializar el total en 0 para que no sume de más al total
  let totalCompra = 0;
  for (let i = 0; i < productos.length; i++) {
    // Actualiza en el documento actual
    totalCompra += productos[i].cantidad * productos[i].precio;
  }
  return totalCompra;
};

carritoSchema.methods.calcularTotal = function() {
  const totalCompra = calcularTotal(this.productos);
  this.total = totalCompra;
  this.save();
};

carritoSchema.methods.calcularTotalPremium = function() {
  const descuento = 0.1;
  const totalCompra = calcularTotal(this.productos);
  this.total = totalCompra;
  this.total = this.total - this.total * descuento;
  this.save();
};

const Carrito = mongoose.model('Carrito', carritoSchema);
module.exports = Carrito;
