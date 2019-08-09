const express = require('express');
const authController = require('../controllers/authController');
const productoController = require('../controllers/productoController');

const router = express.Router();

router
  .route('/')
  .get(productoController.obtenerProductos)
  .post(
    authController.proteger,
    authController.permitirPara('administrador'),
    productoController.crearProducto
  );

router
  .route('/:id')
  .get(productoController.obtenerProducto)
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

module.exports = router;
