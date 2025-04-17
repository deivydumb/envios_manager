const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


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
