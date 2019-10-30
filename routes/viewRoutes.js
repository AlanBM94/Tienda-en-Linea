const express = require('express');
const authController = require('./../controllers/authController');
const carritoController = require('../controllers/carritoController');
const viewController = require('./../controllers/viewController');
const compraController = require('./../controllers/compraController');
const router = express.Router();

router.use(
  compraController.crearCompraCheckout,
  authController.estaLogeado,
  carritoController.obtenerCarritoLocals
);

router.get('/', viewController.principal);

router.get('/electronica', viewController.obtenerCategoria);
router.get('/hogarYCocina', viewController.obtenerCategoria);
router.get('/deportes', viewController.obtenerCategoria);
router.get('/ropaYAccesorios', viewController.obtenerCategoria);
router.get('/herramientas', viewController.obtenerCategoria);

router.get('/productos/:id', viewController.obtenerProducto);

router.get('/carrito', viewController.obtenerCarrito);

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
