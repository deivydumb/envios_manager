/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - identificacion
 *         - email
 *         - rol
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         identificacion:
 *           type: string
 *           description: Unique identification of the user
 *         telefono:
 *           type: string
 *           description: The phone number of the user (optional)
 *         email:
 *           type: string
 *           description: The email of the user
 *         rol:
 *           type: string
 *           description: The role of the user
 *       example:
 *         id: 1
 *         name: John Doe
 *         identificacion: 123456789
 *         telefono: "+123456789"
 *         email: johndoe@example.com
 *         rol: admin
 */
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
  User.associate = (models) => {
    User.hasMany(models.Package, {
      foreignKey: 'userId'
    });
  };
  
module.exports = User;