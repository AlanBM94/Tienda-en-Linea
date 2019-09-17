const express = require('express');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/', viewController.principal);

router.get(
  '/Electronica',
  viewController.categoriaSeleccionada('Electronica'),
  viewController.buscarCategoria
);
router.get(
  '/Hogar',
  viewController.categoriaSeleccionada('Hogar'),
  viewController.buscarCategoria
);
router.get(
  '/Deportes',
  viewController.categoriaSeleccionada('Deportes'),
  viewController.buscarCategoria
);
router.get(
  '/Ropa',
  viewController.categoriaSeleccionada('Ropa'),
  viewController.buscarCategoria
);
router.get(
  '/Herramientas',
  viewController.categoriaSeleccionada('Herramientas'),
  viewController.buscarCategoria
);

module.exports = router;
