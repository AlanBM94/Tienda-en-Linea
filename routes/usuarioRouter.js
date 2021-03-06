const express = require('express');
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');
const compraController = require('../controllers/compraController');
const reseñaController = require('../controllers/reseñaController');

const router = express.Router();

router.route('/').get(usuarioController.obtenerUsuarios);

router.route('/registrarse').post(authController.registrarse);

router.route('/iniciarSesion').post(authController.iniciarSesion);

router.route('/cerrarSesion').get(authController.cerrarSesion);

router.route('/recuperarContrasenia').post(authController.recuperarContrasenia);

router
  .route('/resetearContrasenia/:token')
  .patch(authController.resetearContrasenia);

router.route('/:id').get(usuarioController.obtenerUsuario);

router.use(authController.proteger);

router.route('/:id/resenias').get(reseñaController.obtenerReseñasDesdeUsuario);

router.route('/:id/compras').get(compraController.obtenerCompras);

router.get(
  '/miPerfil',
  usuarioController.miPerfil,
  usuarioController.obtenerUsuario
);

router.patch('/actualizarMiContrasenia', authController.actualizarContrasenia);

router.patch(
  '/actualizarMiPerfil',
  usuarioController.actualizarMiFoto,
  usuarioController.ajustarTamañoFoto,
  usuarioController.actualizarMiPerfil
);

router.delete('/eliminarMiPerfil', usuarioController.eliminarMiPerfil);

router.use(authController.permitirPara('administrador'));

router
  .route('/:id')
  .patch(usuarioController.actualizarUsuario)
  .delete(usuarioController.eliminarUsuario);

module.exports = router;
