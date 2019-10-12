const express = require('express');
const authController = require('../controllers/authController');
const productoController = require('../controllers/productoController');
const carritoController = require('../controllers/carritoController');
const reseñaController = require('../controllers/reseñaController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.estaLogeado,
    carritoController.obtenerCarritoLocals,
    productoController.obtenerProductos
  )
  .post(
    authController.proteger,
    authController.permitirPara('administrador'),
    productoController.crearProducto
  );

router
  .route('/:id')
  .get(
    authController.estaLogeado,
    carritoController.obtenerCarritoLocals,
    productoController.obtenerProducto
  )
  .patch(
    authController.proteger,
    authController.permitirPara('administrador'),
    productoController.modificarProducto
  )
  .delete(
    authController.proteger,
    authController.permitirPara('administrador'),
    productoController.eliminarProducto
  );

router.use(authController.proteger, authController.permitirPara('usuario'));

router
  .route('/:id/resenias')
  .get(reseñaController.obtenerReseñas)
  .post(reseñaController.establecerIdUsuario, reseñaController.crearReseña);

router
  .route('/:id/resenias/:id')
  .patch(reseñaController.actualizarReseña)
  .delete(reseñaController.eliminarReseña);

module.exports = router;
