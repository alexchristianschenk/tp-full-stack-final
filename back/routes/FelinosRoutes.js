const express = require('express');
const router = express.Router();
const FelinosController = require('../controllers/FelinosController');

// Rutas para los hechizos
router.get('/', FelinosController.getPerros);
// router.get('/:id', hechizoController.getHechizoById);
router.post('/', FelinosController.createPerro);
// router.put('/:id', hechizoController.updateHechizo);
// router.delete('/:id', hechizoController.deleteHechizo);


module.exports = router;
