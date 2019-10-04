const Producto = require('../models/productoModel');
const Usuario = require('../models/usuarioModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');

const generarTemplates = (tipo, respuesta) =>
  respuesta.status(200).render(tipo);

exports.principal = (req, res, next) => {
  generarTemplates('home', res);
};

exports.registrarseTemplate = (req, res, next) => {
  generarTemplates('tienda/registrarse', res);
};

exports.iniciarSesionTemplate = (req, res, next) => {
  generarTemplates('tienda/iniciarSesion', res);
};
