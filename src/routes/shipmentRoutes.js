const express = require('express');
const router = express.Router();
const controller = require('../controllers/shipmentController');

/**
 * @swagger
 * tags:
 *   name: Shipments
 *   description: API for managing shipments
 */

/**
 * @swagger
 * /shipment:
 *   post:
 *     summary: Create a new shipment
 *     tags: [Shipments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the shipment
 *               description:
 *                 type: string
 *                 description: Description of the shipment
 *     responses:
 *       201:
 *         description: Shipment created successfully
 */
router.post('/shipment', controller.createShipment);

/**
 * @swagger
 * /shipment:
 *   get:
 *     summary: Retrieve all shipments
 *     tags: [Shipments]
 *     responses:
 *       200:
 *         description: A list of shipments
 */
router.get('/shipment', controller.findAll);

/**
 * @swagger
 * /shipment/{id}:
 *   get:
 *     summary: Retrieve a shipment by ID
 *     tags: [Shipments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The shipment ID
 *     responses:
 *       200:
 *         description: Shipment found
 *       404:
 *         description: Shipment not found
 */
router.get('/shipment/:id', controller.findById);

/**
 * @swagger
 * /shipment/{id}:
 *   put:
 *     summary: Update a shipment by ID
 *     tags: [Shipments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The shipment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Shipment updated successfully
 *       404:
 *         description: Shipment not found
 */
router.put('/shipment/:id', controller.update);

/**
 * @swagger
 * /shipment/{id}:
 *   delete:
 *     summary: Delete a shipment by ID
 *     tags: [Shipments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The shipment ID
 *     responses:
 *       200:
 *         description: Shipment deleted successfully
 *       404:
 *         description: Shipment not found
 */
router.delete('/shipment/:id', controller.remove);

module.exports = router;