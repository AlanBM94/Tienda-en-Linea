const express = require('express');
const authController = require('../controllers/authController');
const compraController = require('../controllers/compraController');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.use(authController.proteger);

router.get(
  '/checkout-session/:carritoID',
  authController.proteger,
  compraController.obtenerCheckoutSession,
  usuarioController.verificarSiUsuarioEsPremium
);

router.get('/:id', compraController.obtenerCompra);

module.exports = router;
