const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Shipment = require("./shipmentModel"); 
const Journey = require("./journeyModel"); // Asegúrate de importar el modelo Journey

/**
 * @swagger
 * components:
 *   schemas:
 *     Package:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the package.
 *           example: 1
 *         tipo:
 *           type: string
 *           description: Type of the package.
 *           example: "Electronics"
 *         descripcion:
 *           type: string
 *           description: Description of the package.
 *           example: "Smartphone with accessories"
 *         peso:
 *           type: number
 *           format: float
 *           description: Weight of the package in kilograms.
 *           example: 2.5
 *         largo:
 *           type: number
 *           format: float
 *           description: Length of the package in centimeters.
 *           example: 30.0
 *         alto:
 *           type: number
 *           format: float
 *           description: Height of the package in centimeters.
 *           example: 10.0
 *         ancho:
 *           type: number
 *           format: float
 *           description: Width of the package in centimeters.
 *           example: 15.0
 *         unidades:
 *           type: integer
 *           description: Number of units in the package.
 *           example: 1
 *         shipmentId:
 *           type: integer
 *           description: Identifier of the associated shipment.
 *           example: 101
 *         journeyId:
 *           type: integer
 *           description: Identifier of the associated journey (optional).
 *           example: 202
 *       required:
 *         - id
 *         - peso
 *         - largo
 *         - unidades
 *         - shipmentId
 */
const Package = sequelize.define(
  "Package",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tipo: { type: DataTypes.STRING, allowNull: true },
    descripcion: { type: DataTypes.STRING, allowNull: true },
    peso: { type: DataTypes.FLOAT, allowNull: false },
    largo: { type: DataTypes.FLOAT, allowNull: false },
    alto: { type: DataTypes.FLOAT, allowNull: true },
    ancho: { type: DataTypes.FLOAT, allowNull: true },
    unidades: { type: DataTypes.INTEGER, allowNull: false },
    shipmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Shipment",
        key: "id",
      },
    },
    journeyId: {
      type: DataTypes.INTEGER,
      allowNull: true, // ← porque se asigna después
      references: {
        model: 'Journey',
        key: 'id'
      }
    }
  },
  
  {
    freezeTableName: true,
    tableName: "Package",
  }
);

Package.belongsTo(Shipment, {
  foreignKey: 'shipmentId',
  as: 'shipment'
});
Shipment.hasMany(Package, { foreignKey: "shipmentId" });

Journey.hasMany(Package, { foreignKey: 'journeyId', as: 'packages' });
Package.belongsTo(Journey, { foreignKey: 'journeyId', as: 'journey' });
module.exports = Package;
