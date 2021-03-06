const express = require('express');
const authController = require('../controllers/authController');
const productoController = require('../controllers/productoController');
const reseñaController = require('../controllers/reseñaController');

const router = express.Router();

router
  .route('/productosPorPrecio/:precio')
  .get(
    productoController.modificarConsultaPorPrecio,
    productoController.obtenerProductos
  );

router
  .route('/estadisticas')
  .get(productoController.obtenerEstadisticasProductos);

router
  .route('/productosMasVendidos')
  .get(productoController.obtenerProductosMasVendidos);

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

router.use(authController.proteger, authController.permitirPara('usuario'));

router
  .route('/:id/resenias')
  .get(reseñaController.obtenerReseñas)
  .post(
    reseñaController.establecerIdUsuario,
    reseñaController.permitirHacerReseñaUsuario,
    reseñaController.crearReseña
  );

router
  .route('/:id/resenias/:id')
  .get(reseñaController.obtenerReseña)
  .patch(reseñaController.actualizarReseña)
  .delete(reseñaController.eliminarReseña);

module.exports = router;
