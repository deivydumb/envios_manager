const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Shipment = require("./shipmentModel"); 

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

module.exports = Package;
