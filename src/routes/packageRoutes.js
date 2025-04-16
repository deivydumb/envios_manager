/**
 * @swagger
 * tags:
 *   name: Packages
 *   description: API para gestionar paquetes
 */

/**
 * @swagger
 * /package:
 *   post:
 *     summary: Crear un nuevo paquete
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
 *                 description: Nombre del paquete
 *               description:
 *                 type: string
 *                 description: Descripción del paquete
 *     responses:
 *       201:
 *         description: Paquete creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /package:
 *   get:
 *     summary: Obtener todos los paquetes
 *     tags: [Packages]
 *     responses:
 *       200:
 *         description: Lista de paquetes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID del paquete
 *                   name:
 *                     type: string
 *                     description: Nombre del paquete
 */

/**
 * @swagger
 * /package/{id}:
 *   get:
 *     summary: Obtener un paquete por ID
 *     tags: [Packages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paquete
 *     responses:
 *       200:
 *         description: Información del paquete
 *       404:
 *         description: Paquete no encontrado
 */

/**
 * @swagger
 * /package/{id}:
 *   put:
 *     summary: Actualizar un paquete por ID
 *     tags: [Packages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del paquete
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del paquete
 *               description:
 *                 type: string
 *                 description: Descripción del paquete
 *     responses:
 *       200:
 *         description: Paquete actualizado exitosamente
 *       404:
 *         description: Paquete no encontrado
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/packageController');
const { findById } = require('../repositories/userRepository');

router.post('/package', controller.createPackage);
router.get('/package', controller.findAll);
router.get('/package/:id', controller.findById);
router.put('/package/:id', controller.update);

module.exports = router;