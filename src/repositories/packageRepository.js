const { get } = require('http');
const packageModel = require('../models/packageModel');
const User = require('../models/userModel');
const getAllPackage = () => {
    return packageModel.findAll()
  };
  
  
  const findById = async (id) => {
    return await packageModel.findByPk(id, {
        include: [{
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'] // o todos si prefieres
        }]
      });
    };
  
const create = async (packageData) => {
    try {
      return await packageModel.create(packageData);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        const duplicateField = error.errors[0].path;
        throw { 
          status: 400, 
          message: 'Dato duplicado: ' + duplicateField,
          code: 'DUPLICATE_FIELD',
          duplicateField 
        };
      }
      throw {
        status: 500,
        message: 'Error al crear paquete',
        code: 'DATABASE_ERROR',
        originalError: error.message
      };
    }
  };
  
  const update = async (id, updateData) => {
    try {
      // No permitir modificar userId
      if (updateData.userId) {
        delete updateData.userId;
      }
  
      const [updatedRows] = await packageModel.update(updateData, {
        where: { id }
      });
  
      if (updatedRows === 0) {
        return null;
      }
  
      // Retornar el objeto actualizado
      const updatedPackage = await packageModel.findByPk(id);
      return updatedPackage;
  
    } catch (error) {
      throw error;
    }
  };

  const exists = async (userId) => {
    const count = await UserModel.count({ where: { id: userId } });
    return count > 0;
  };
  module.exports = {
    create,
    exists,
    getAllPackage,
    findById,
    update,
  }