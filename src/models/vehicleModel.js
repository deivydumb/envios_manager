const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

/**
 * @swagger
 * components:
 *   schemas:
 *     Vehicle:
 *       type: object
 *       required:
 *         - placa
 *         - marca
 *         - modelo
 *         - capacidad
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the vehicle
 *         placa:
 *           type: string
 *           description: The unique license plate of the vehicle
 *         marca:
 *           type: string
 *           description: The brand of the vehicle
 *         modelo:
 *           type: string
 *           description: The model of the vehicle
 *         capacidad:
 *           type: number
 *           format: decimal
 *           description: The capacity of the vehicle in decimal format
 *       example:
 *         id: 1
 *         placa: "ABC123"
 *         marca: "Toyota"
 *         modelo: "Corolla"
 *         capacidad: 1500.50
 */

const Vehicle = sequelize.define("Vehicle", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidad: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: "Vehicle"
});

Vehicle.associate = (models) => {
    Vehicle.hasMany(models.Conveyor, {
        foreignKey: "vehicleId",
        as: "conveyors"
    });
};

module.exports = Vehicle;
