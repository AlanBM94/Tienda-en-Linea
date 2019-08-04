const express = require('express');
const productoController = require('../controllers/productoController');

const router = express.Router();

router
  .route('/')
  .get(productoController.obtenerProductos)
  .post(productoController.crearProducto);

router
  .route('/:id')
  .get(productoController.obtenerProducto)
  .patch(productoController.modificarProducto)
  .delete(productoController.eliminarProducto);

module.exports = router;
