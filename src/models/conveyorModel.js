const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Vehicle = require("./vehicleModel");
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
