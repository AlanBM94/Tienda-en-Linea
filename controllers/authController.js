// const crypto = require('crypto');
// const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const Usuario = require('./../models/usuarioModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const firmarToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const enviarToken = (usuario, statusCodigo, res) => {
  const token = firmarToken(usuario.id);
  usuario.contraseña = undefined;
  res.status(statusCodigo).json({
    status: 'Exito',
    token,
    data: {
      usuario
    }
  });
};

exports.registrarse = catchAsync(async (req, res, next) => {
  const usuario = await Usuario.create(req.body);
  enviarToken(usuario, 201, res);
});

exports.iniciarSesion = catchAsync(async (req, res, next) => {
  const { email, contraseña } = req.body;
  // Si no existe email ó contraseña crea un nuevo error
  if (!email || !contraseña) {
    return new AppError('Ingresa tu email y contraseña', 400);
  }
  // Crea al usuario a partir del email y selecciona la contraseña (porque la contraseña no se muestra en la respuesta del servidor, eso se establecio desde el modelo)para compararla con el metodo contraseñaCorrecta
  const usuario = await Usuario.findOne({ email }).select('+contraseña');
  // Si no existe usuario con ese email o la contraseña es incorrecta crea un nuevo error
  if (
    !usuario ||
    !(await usuario.contraseñaCorrecta(contraseña, usuario.contraseña))
  ) {
    return next(new AppError('Email o contraseña incorrectos', 401));
  }
  // Envia la token del servidor al cliente
  enviarToken(usuario, 200, res);
});
