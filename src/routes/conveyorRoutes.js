const express = require('express');
const router = express.Router();
const controller = require('../controllers/conveyorController');


router.post('/conveyor', controller.create);
router.get('/conveyor', controller.getAll);
router.get('/conveyor/:id', controller.getById);
router.put('/conveyor/:id', controller.update);

module.exports = router;