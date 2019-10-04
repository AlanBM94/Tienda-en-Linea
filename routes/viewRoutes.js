const express = require('express');
const authController = require('./../controllers/authController');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/', authController.estaLogeado, viewController.principal);

router.get(
  '/registrarse',
  authController.estaLogeado,
  viewController.registrarseTemplate
);

module.exports = router;
