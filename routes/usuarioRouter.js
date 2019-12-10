const express = require('express');

const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.route('/registrarse').post(authController.registrarse);

router.route('/iniciarSesion').post(authController.iniciarSesion);

router.route('/:id').get(usuarioController.obtenerUsuario);

router.use(authController.proteger);

router.route('/').get(usuarioController.obtenerUsuarios);

router.get(
  '/miPerfil',
  usuarioController.miPerfil,
  usuarioController.obtenerUsuario
);
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
