const express = require('express');
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.route('/registrarse').post(authController.registrarse);

router.route('/iniciarSesion').post(authController.iniciarSesion);

router.use(authController.proteger);

router.get(
  '/miPerfil',
  usuarioController.miPerfil,
  usuarioController.obtenerUsuario
);

router.patch('/actualizarMiPerfil', usuarioController.actualizarMiPerfil);
router.delete('/eliminarMiPerfil', usuarioController.eliminarMiPerfil);

router.use(authController.permitirPara('administrador'));

router.route('/').get(usuarioController.obtenerUsuarios);

router
  .route('/:id')
  .get(usuarioController.obtenerUsuarioDesdeAdmin)
  .patch(usuarioController.actualizarUsuario)
  .delete(usuarioController.eliminarUsuario);

module.exports = router;
