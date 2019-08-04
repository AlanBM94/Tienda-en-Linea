const express = require('express');
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.route('/registrarse').post(authController.registrarse);

router.route('/').get(usuarioController.obtenerUsuarios);

module.exports = router;
