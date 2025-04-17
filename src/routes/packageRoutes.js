

const express = require('express');
const router = express.Router();
const controller = require('../controllers/packageController');
const { findById } = require('../repositories/userRepository');

/**
 * @swagger
 * tags:
 *   name: Packages
 *   description: API for managing packages
 */

/**
 * @swagger
 * /package:
 *   post:
 *     summary: Create a new package
 *     tags: [Packages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               weight:
 *                 type: number
 *     responses:
 *       201:
 *         description: Package created successfully
 */
router.post('/package', controller.createPackage);

/**
 * @swagger
 * /package:
 *   get:
 *     summary: Get all packages
 *     tags: [Packages]
 *     responses:
 *       200:
 *         description: List of packages
 */
router.get('/package', controller.findAll);

/**
 * @swagger
 * /package/{id}:
 *   get:
 *     summary: Get a package by ID
 *     tags: [Packages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Package ID
 *     responses:
 *       200:
 *         description: Package details
 */
router.get('/package/:id', controller.findById);

/**
 * @swagger
 * /package/{id}:
 *   put:
 *     summary: Update a package by ID
 *     tags: [Packages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Package ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               weight:
 *                 type: number
 *     responses:
 *       200:
 *         description: Package updated successfully
 */
router.put('/package/:id', controller.update);

/**
 * @swagger
 * /{id}/assign-journey:
 *   patch:
 *     summary: Assign a journey to a package
 *     tags: [Packages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Package ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               journeyId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Journey assigned successfully
 */
router.patch('/:id/assign-journey', controller.assignJourneyToPackage);

module.exports = router;