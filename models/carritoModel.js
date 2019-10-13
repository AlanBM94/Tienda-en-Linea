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
      type: Number
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

carritoSchema.methods.calcularTotal = function() {
  // Cada vez que se llama este metodo se vuelve a inicializar el total en 0 para que no sume de más al total
  this.total = 0;
  for (let i = 0; i < this.productos.length; i++) {
    // Actualiza en el documento actual
    this.total += this.productos[i].cantidad * this.productos[i].precio;
  }
  this.save();
};

const Carrito = mongoose.model('Carrito', carritoSchema);
module.exports = Carrito;
