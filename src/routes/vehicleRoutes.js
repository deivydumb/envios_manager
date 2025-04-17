const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController');

router.get('/vehicle', controller.findAll);
router.get('/vehicle/:id', controller.findById);
router.post('/vehicle', controller.create);
router.put('/vehicle/:id', controller.update);
router.delete('/vehicle/:id', controller.remove);

module.exports = router;
