/**
 * @swagger
 * tags:
 *   name: Conveyor
 *   description: API para gestionar conveyors
 */

/**
 * @swagger
 * /conveyor:
 *   post:
 *     summary: Crea un nuevo conveyor
 *     tags: [Conveyor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del conveyor
 *     responses:
 *       201:
 *         description: Conveyor creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /conveyor:
 *   get:
 *     summary: Obtiene todos los conveyors
 *     tags: [Conveyor]
 *     responses:
 *       200:
 *         description: Lista de conveyors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */

/**
 * @swagger
 * /conveyor/{id}:
 *   get:
 *     summary: Obtiene un conveyor por ID
 *     tags: [Conveyor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del conveyor
 *     responses:
 *       200:
 *         description: Conveyor encontrado
 *       404:
 *         description: Conveyor no encontrado
 */

/**
 * @swagger
 * /conveyor/{id}:
 *   put:
 *     summary: Actualiza un conveyor por ID
 *     tags: [Conveyor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del conveyor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nuevo nombre del conveyor
 *     responses:
 *       200:
 *         description: Conveyor actualizado
 *       404:
 *         description: Conveyor no encontrado
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/conveyorController');

router.post('/conveyor', controller.create);
router.get('/conveyor', controller.getAll);
router.get('/conveyor/:id', controller.getById);
router.put('/conveyor/:id', controller.update);

module.exports = router;