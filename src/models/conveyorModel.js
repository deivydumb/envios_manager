const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Coveyor = sequelize.define(
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
        }, {
          tableName: 'Conveyors',
          timestamps: true,
          paranoid: true
        });
module.exports = Coveyor;
