const mongoose = require('mongoose');
const Producto = require('./productoModel');

const reseñaSchema = new mongoose.Schema(
  {
    reseña: {
      type: String,
      required: [true, 'La reseña es requerida']
    },
    puntuacion: {
      type: Number,
      min: 1,
      max: 5
    },
    reseñaFecha: {
      type: Date,
      default: Date.now()
    },
    producto: {
      type: mongoose.Schema.ObjectId,
      ref: 'Producto',
      required: [true, 'La reseña debe pertenecer a un producto']
    },
    usuario: {
      type: mongoose.Schema.ObjectId,
      ref: 'Usuario',
      required: [true, 'La reseña debe de ser escrita por un usuario']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

reseñaSchema.index({ producto: 1, usuario: 1 }, { unique: true });

reseñaSchema.statics.calcularPromedioReseñas = async function(productoId) {
  const estadisticas = await this.aggregate([
    {
      $match: { producto: productoId }
    },
    {
      $group: {
        _id: '$producto',
        cantidadReseñas: { $sum: 1 },
        puntuacionPromedio: { $avg: '$puntuacion' }
      }
    }
  ]);

  if (estadisticas.length > 0) {
    await Producto.findByIdAndUpdate(productoId, {
      cantidadReseñas: estadisticas[0].cantidadReseñas,
      puntuacionPromedio: estadisticas[0].puntuacionPromedio
    });
  } else {
    await Producto.findByIdAndUpdate(productoId, {
      cantidadReseñas: 0,
      puntuacionPromedio: 4.5
    });
  }
};

reseñaSchema.post('save', function() {
  // this points to the current review
  this.constructor.calcularPromedioReseñas(this.producto);
});

reseñaSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'usuario',
    select: 'nombre, foto'
  });
  next();
});

const Reseña = mongoose.model('Reseña', reseñaSchema);

module.exports = Reseña;
