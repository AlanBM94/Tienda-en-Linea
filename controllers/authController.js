const crypto = require('crypto');
const { promisify } = require('util');
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
