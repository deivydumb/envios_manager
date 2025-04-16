const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
