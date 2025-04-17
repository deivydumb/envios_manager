const express = require('express');
const router = express.Router();
const controller = require('../controllers/journeyController');
const { findById } = require('../repositories/userRepository');

/**
 * @swagger
 * tags:
 *   name: Journey
 *   description: API for managing journeys
 */

/**
 * @swagger
 * /journey:
 *   post:
 *     summary: Create a new journey
 *     tags: [Journey]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the journey
 *               description:
 *                 type: string
 *                 description: Description of the journey
 *     responses:
 *       201:
 *         description: Journey created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/journey', controller.create);

/**
 * @swagger
 * /journey:
 *   get:
 *     summary: Get all journeys
 *     tags: [Journey]
 *     responses:
 *       200:
 *         description: List of journeys
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/journey', controller.getAll);

/**
 * @swagger
 * /journey/{id}:
 *   get:
 *     summary: Get a journey by ID
 *     tags: [Journey]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Journey ID
 *     responses:
 *       200:
 *         description: Journey details
 *       404:
 *         description: Journey not found
 */
router.get('/journey/:id', controller.getById);

/**
 * @swagger
 * /journey/{id}:
 *   put:
 *     summary: Update a journey by ID
 *     tags: [Journey]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Journey ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the journey
 *               description:
 *                 type: string
 *                 description: Description of the journey
 *     responses:
 *       200:
 *         description: Journey updated successfully
 *       404:
 *         description: Journey not found
 */
router.put('/journey/:id', controller.update);

module.exports = router;