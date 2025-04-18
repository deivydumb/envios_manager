const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


/**
 * @swagger
 * components:
 *   schemas:
 *     Shipment:
 *       type: object
 *       required:
 *         - codigo_seguimiento
 *         - fecha_entrega_estimada
 *         - estado
 *         - costo
 *         - ciudad_origen
 *         - direccion_origen
 *         - ciudad_destino
 *         - direccion_destino
 *         - userId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del envío
 *         codigo_seguimiento:
 *           type: string
 *           description: Código único de seguimiento del envío
 *         fecha_envio:
 *           type: string
 *           format: date-time
 *           description: Fecha de envío (por defecto la fecha actual)
 *         fecha_entrega_estimada:
 *           type: string
 *           format: date-time
 *           description: Fecha estimada de entrega
 *         estado:
 *           type: string
 *           enum:
 *             - preparacion
 *             - transito
 *             - en_reparto
 *             - entregado
 *             - cancelado
 *           description: Estado actual del envío
 *         costo:
 *           type: number
 *           format: decimal
 *           description: Costo del envío
 *         ciudad_origen:
 *           type: string
 *           description: Ciudad de origen del envío
 *         direccion_origen:
 *           type: string
 *           description: Dirección de origen del envío
 *         ciudad_destino:
 *           type: string
 *           description: Ciudad de destino del envío
 *         direccion_destino:
 *           type: string
 *           description: Dirección de destino del envío
 *         userId:
 *           type: integer
 *           description: ID del usuario asociado al envío
 *       example:
 *         id: 1
 *         codigo_seguimiento: "ABC123456"
 *         fecha_envio: "2023-01-01T10:00:00Z"
 *         fecha_entrega_estimada: "2023-01-05T10:00:00Z"
 *         estado: "preparacion"
 *         costo: 150.50
 *         ciudad_origen: "Bogotá"
 *         direccion_origen: "Calle 123 #45-67"
 *         ciudad_destino: "Medellín"
 *         direccion_destino: "Carrera 89 #12-34"
 *         userId: 42
 */

const Shipment = sequelize.define('Shipment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_seguimiento: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  fecha_envio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fecha_entrega_estimada: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM(
      'preparacion',
      'transito',
      'en_reparto',
      'entregado',
      'cancelado'
    ),
    defaultValue: 'preparacion'
  },
  costo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  ciudad_origen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion_origen: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ciudad_destino: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion_destino: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "id",
    },
  },
}, {
  tableName: 'Shipment',
  timestamps: true,
  paranoid: true 
});

Shipment.associate = (models) => {
  Shipment.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user'
  });
};
  
module.exports = Shipment;
