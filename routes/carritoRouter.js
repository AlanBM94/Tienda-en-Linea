const express = require('express');
const authController = require('../controllers/authController');
const carritoController = require('../controllers/carritoController');

const router = express.Router();

router.use(authController.proteger, authController.permitirPara('usuario'));

router
  .route('/agregar')
  .post(carritoController.crearCarrito, carritoController.agregarAlCarrito);

router.route('/ver').get(carritoController.obtenerCarrito);

router.route('/:id').delete(carritoController.eliminarProductoDelCarrito);

module.exports = router;
