const mongoose = require('mongoose');
const slugify = require('slugify');

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Los productos deben de tener un nombre'],
      unique: true,
      trim: true,
      maxlength: [
        100,
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
      min: 0
    },
    puntuacionPromedio: {
      type: Number,
      default: 4.5,
      min: [1, 'La puntuación mínima es 1'],
      max: [5, 'La puntuación máxima es 5'],
      set: val => Math.round(val * 10) / 10
    },
    cantidadReseñas: {
      type: Number,
      default: 0
    },
    numeroVentas: {
      type: Number,
      min: 0,
      default: 0
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

productoSchema.virtual('reseñas', {
  ref: 'Reseña',
  localField: '_id',
  foreignField: 'producto'
});

// Este middleware le da un slug al producto
productoSchema.pre('save', function(next) {
  this.slug = slugify(this.nombre, { lower: true });
  next();
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
