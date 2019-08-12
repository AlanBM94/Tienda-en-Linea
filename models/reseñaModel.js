const mongoose = require('mongoose');

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
      default: Date.now
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

reseñaSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'usuario',
    select: 'nombre, foto'
  });
  next();
});

const Reseña = mongoose.model('Reseña', reseñaSchema);

module.exports = Reseña;
