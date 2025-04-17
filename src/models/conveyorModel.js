const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Vehicle = require("./vehicleModel");


/**
 * @swagger
 * components:
 *   schemas:
 *     Conveyor:
 *       type: object
 *       required:
 *         - nombre
 *         - identificacion
 *         - telefono
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the conveyor.
 *         nombre:
 *           type: string
 *           description: Name of the conveyor.
 *         identificacion:
 *           type: string
 *           description: Identification number of the conveyor.
 *         telefono:
 *           type: string
 *           description: Phone number of the conveyor.
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the conveyor.
 *         empresa:
 *           type: string
 *           description: Company associated with the conveyor (optional).
 *         licencia_transporte:
 *           type: string
 *           description: Transport license of the conveyor (optional).
 *         vehicleId:
 *           type: integer
 *           description: ID of the associated vehicle (optional).
 *       example:
 *         id: 1
 *         nombre: "John Doe"
 *         identificacion: "123456789"
 *         telefono: "+1234567890"
 *         email: "johndoe@example.com"
 *         empresa: "Transport Inc."
 *         licencia_transporte: "ABC12345"
 *         vehicleId: 10
 */
const Conveyor = sequelize.define(
    "Conveyor",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          nombre: {
            type: DataTypes.STRING,
            allowNull: false
          },
          identificacion: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          telefono: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          empresa: {
            type: DataTypes.STRING,
            allowNull: true // puede ser opcional
          },
          licencia_transporte: {
            type: DataTypes.STRING,
            allowNull: true
          },
          vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: "Vehicle",
              key: "id"
            }
          }
        }, {
          tableName: 'Conveyors',
          timestamps: true,
          paranoid: true
        });

        Conveyor.associate = (models) => {
          Conveyor.belongsTo(models.Vehicle, {
            foreignKey: "vehicleId",
            as: "vehicle"
          });
        };

module.exports = Conveyor;
