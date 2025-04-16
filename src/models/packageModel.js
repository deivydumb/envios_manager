const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { table } = require('console');


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
 *         peso:
 *           type: number
 *           description: Weight of the package.
 *           example: 2.5
 *         largo:
 *           type: number
 *           description: Length of the package.
 *           example: 30
 *         alto:
 *           type: number
 *           description: Height of the package.
 *           example: 15
 *         ancho:
 *           type: number
 *           description: Width of the package.
 *           example: 20
 *         unidades:
 *           type: number
 *           description: Number of units in the package.
 *           example: 3
 *         userId:
 *           type: integer
 *           description: ID of the user associated with the package.
 *           example: 42
 *       required:
 *         - peso
 *         - largo
 *         - unidades
 *         - userId
 *       example:
 *         id: 1
 *         peso: 2.5
 *         largo: 30
 *         alto: 15
 *         ancho: 20
 *         unidades: 3
 *         userId: 42
 */
const Package = sequelize.define('Package', {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
    peso: { type: DataTypes.NUMBER, allowNull: false },
    largo: { type: DataTypes.NUMBER, unique: true, allowNull: false },
    alto: { type: DataTypes.NUMBER, allowNull: true },
    ancho: { type: DataTypes.NUMBER, allowNull: true, allowNull: false },
    unidades: { type: DataTypes.NUMBER, allowNull: false },
    userId: { type: DataTypes.INTEGER,allowNull: false, references: {
          model: 'User',
          key: 'id'
        }
      }
  },{
    freezeTableName: true,
    tableName: 'Package',
  });
  Package.associate = (models) => {
    Package.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };
  
module.exports = Package;