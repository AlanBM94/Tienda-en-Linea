const express = require('express');
const authController = require('./../controllers/authController');
const carritoController = require('../controllers/carritoController');
const viewController = require('./../controllers/viewController');
const compraController = require('./../controllers/compraController');
const router = express.Router();

router.get(
  '/',
  compraController.crearCompraCheckout,
  authController.estaLogeado,
  carritoController.obtenerCarritoLocals,
  viewController.principal
);

router.get(
  '/registrarse',
  authController.estaLogeado,
  viewController.registrarseTemplate
);
router.get(
  '/iniciarSesion',
  authController.estaLogeado,
  viewController.iniciarSesionTemplate
);

module.exports = router;
