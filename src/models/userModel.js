const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { table } = require('console');


const User = sequelize.define('User', {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
    name: { type: DataTypes.STRING, allowNull: false },
    identificacion: { type: DataTypes.STRING, unique: true, allowNull: false },
    telefono: { type: DataTypes.STRING, allowNull: true }, // Cambiado a opcional
    email: { type: DataTypes.STRING, allowNull: true, allowNull: false },
    rol: { type: DataTypes.STRING, allowNull: false }
  },{
    freezeTableName: true,
    tableName: 'User',
  });
  
module.exports = User;