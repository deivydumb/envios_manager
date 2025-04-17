const express = require('express');
const router = express.Router();
const controller = require('../controllers/shipmentController');

router.post('/shipment', controller.createShipment);
router.get('/shipment', controller.findAll);
router.get('/shipment/:id', controller.findById);
router.put('/shipment/:id', controller.update);
router.delete('/shipment/:id', controller.remove);


module.exports = router;