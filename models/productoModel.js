const mongoose = require('mongoose');
const slugify = require('slugify');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Los productos deben de tener un nombre'],
    unique: true,
    trim: true,
    maxlength: [
      40,
      'El nombre del producto debe tener como máximo 40 caracteres'
    ],
    minlength: [
      10,
      'El nombre del producto debe tener como mínimo 10 caracteres'
    ]
  },
  slug: String,
  categoria: {
    type: String,
    required: [true, 'El producto debe de tener una categoría']
  },
  descripcion: {
    type: String,
    required: [true, 'El producto debe de tener una descripción']
  },
  precio: {
    type: Number,
    required: [true, 'El producto debe de tener un precio']
  },
  imagenPrincipal: {
    type: String,
    required: [true, 'El producto debe de tener una imagen principal']
  },
  imagenes: [String],
  stock: {
    type: Number,
    min: 1
  }
});

// Este middleware le da un slug al producto
productoSchema.pre('save', function(next) {
  this.slug = slugify(this.nombre, { lower: true });
  next();
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
