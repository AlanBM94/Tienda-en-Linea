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

router.route('/').get(usuarioController.obtenerUsuarios);

module.exports = router;
