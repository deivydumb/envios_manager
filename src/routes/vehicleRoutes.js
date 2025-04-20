/**
 * @swagger
 * tags:
 *   name: Vehicles
 *   description: API for managing vehicles
 */

/**
 * @swagger
 * /vehicle:
 *   get:
 *     summary: Retrieve a list of vehicles
 *     tags: [Vehicles]
 *     responses:
 *       200:
 *         description: A list of vehicles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicle'
 */

/**
 * @swagger
 * /vehicle/{id}:
 *   get:
 *     summary: Retrieve a single vehicle by ID
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The vehicle ID
 *     responses:
 *       200:
 *         description: A single vehicle
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Vehicle not found
 */

/**
 * @swagger
 * /vehicle:
 *   post:
 *     summary: Create a new vehicle
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       201:
 *         description: Vehicle created successfully
 */

/**
 * @swagger
 * /vehicle/{id}:
 *   put:
 *     summary: Update an existing vehicle
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The vehicle ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       200:
 *         description: Vehicle updated successfully
 *       404:
 *         description: Vehicle not found
 */

/**
 * @swagger
 * /vehicle/{id}:
 *   delete:
 *     summary: Delete a vehicle
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The vehicle ID
 *     responses:
 *       200:
 *         description: Vehicle deleted successfully
 *       404:
 *         description: Vehicle not found
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController');

router.get('/vehicle', controller.findAll);
router.get('/vehicle/:id', controller.findById);
router.post('/vehicle', controller.create);
router.put('/vehicle/:id', controller.update);
router.delete('/vehicle/:id', controller.remove);

module.exports = router;
