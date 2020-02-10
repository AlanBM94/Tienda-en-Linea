const express = require('express');
const authController = require('./../controllers/authController');
const carritoController = require('../controllers/carritoController');
const viewController = require('./../controllers/viewController');
const compraController = require('./../controllers/compraController');

const router = express.Router();

router.use(
  compraController.crearCompraCheckout,
  authController.usuarioEstaLogeado,
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

router.get('/registrarse', viewController.registrarseTemplate);
router.get('/iniciarSesion', viewController.iniciarSesionTemplate);
router.get('/recuperarContrasenia', viewController.recuperarContrasenia);
router.get('/resetearContrasenia/:token', viewController.resetearContrasenia);

router.get('/perfil', authController.proteger, viewController.perfilTemplate);

router.get(
  '/misCompras',
  authController.proteger,
  viewController.misComprasTemplate
);

router.get(
  '/misResenias',
  authController.proteger,
  viewController.misReseñasTemplate
);

module.exports = router;
