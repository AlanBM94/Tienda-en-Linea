const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const Usuario = require('./../models/usuarioModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.registrarse = async (req, res, next) => {
  const nuevoUsuario = await Usuario.create(req.body);
  console.log(nuevoUsuario);

  res.status(201).json({
    status: 'exito',
    data: {
      nuevoUsuario
    }
  });
};
