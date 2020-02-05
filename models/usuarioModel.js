const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    maxlength: 10,
    minlength: 3,
    required: [true, 'El usuario debe de tener un nombre']
  },
  email: {
    type: String,
    required: [true, 'El usuario debe de tener un correo electrónico'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Ingresa un correo electrónico valido']
  },
  foto: {
    type: String,
    default: 'default.jpg'
  },
  rol: {
    type: String,
    enum: ['administrador', 'usuario'],
    default: 'usuario'
  },
  contraseña: {
    type: String,
    required: [true, 'Ingresa una contraseña'],
    minlength: 8,
    select: false
  },
  confirmarContraseña: {
    type: String,
    required: [true, 'Confirma tu contraseña'],
    validate: {
      //   Esto solo funciona en CREATE y SAVE!!!
      validator: function(el) {
        return el === this.contraseña;
      },
      message: 'Las contraseñas no son iguales'
    }
  },
  premium: {
    type: Boolean,
    default: false
  },

  contraseñaCambiadaEn: Date,
  recuperarContraseñaToken: String,
  recuperarContraseñaExpira: Date,
  activo: {
    type: Boolean,
    default: true,
    select: false
  }
});

// Middleware que encripta la contraseña
usuarioSchema.pre('save', async function(next) {
  // Si la contraseña no ha sido modificada se ejecuta el siguiente middleware
  if (!this.isModified('contraseña')) return next();
  // Hashea la contraseña con un costo de 12
  this.contraseña = await bcrypt.hash(this.contraseña, 12);
  // Elimina el campo de confirmarContraseña
  this.confirmarContraseña = undefined;
  next();
});

// Before the password is changed
usuarioSchema.pre('save', function(next) {
  if (!this.isModified('contraseña') || this.isNew) return next();
  // Set the passwordChangedAt to the current Date
  this.contraseñaCambiadaEn = Date.now() - 1000;
  next();
});

usuarioSchema.methods.contraseñaCorrecta = async (
  contraseñaCorrecta,
  usuarioContraseña
) => {
  return await bcrypt.compare(contraseñaCorrecta, usuarioContraseña);
};

usuarioSchema.methods.crearTokenRecuperarContrasenia = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.recuperarContraseñaToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.recuperarContraseñaExpira = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
