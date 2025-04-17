const express = require('express');
const router = express.Router();
const controller = require('../controllers/journeyController');
const { findById } = require('../repositories/userRepository');

router.post('/journey', controller.create);
router.get('/journey', controller.getAll);
router.get('/journey/:id', controller.getById);
router.put('/journey/:id', controller.update);

module.exports = router;