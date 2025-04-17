const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     Journey:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the journey.
 *         fecha_inicio:
 *           type: string
 *           format: date-time
 *           description: Start date of the journey.
 *         fecha_fin_estimada:
 *           type: string
 *           format: date-time
 *           description: Estimated end date of the journey.
 *         estado:
 *           type: string
 *           enum: [pendiente, en_progreso, completado, cancelado]
 *           description: Current state of the journey.
 *         origen:
 *           type: string
 *           description: Origin location of the journey.
 *         destino:
 *           type: string
 *           description: Destination location of the journey.
 *         transportistaId:
 *           type: integer
 *           description: ID of the associated transporter.
 *       required:
 *         - fecha_inicio
 *         - fecha_fin_estimada
 *         - estado
 *         - origen
 *         - destino
 *         - transportistaId
 */

const Journey = sequelize.define('Journey', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  fecha_fin_estimada: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM(
      'pendiente',
      'en_progreso',
      'completado',
      'cancelado'
    ),
    defaultValue: 'pendiente'
  },
  origen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transportistaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Conveyors',
      key: 'id'
    }
  }
}, {
  tableName: 'Journey',
  timestamps: true,
  paranoid: true
});

module.exports = Journey;
