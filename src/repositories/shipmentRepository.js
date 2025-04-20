const Shipment = require('../models/shipmentModel');
const UserModel = require('../models/userModel');
const Package = require('../models/packageModel');

const create= async (packageData) => {
  try {
    console.log('packageData', packageData);
    return await Shipment.create(packageData);
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
const findById = async (id) => {
  return await Shipment.findByPk(id, {
      include: [{
        model: UserModel,
        as: 'user',
        attributes: ['id', 'name', 'email']
      }]
    });
  };

  const findAll = async () => {
    return await shipmentModel.findAll();
  };

  const update = async (id, updateData) => {
    await shipmentModel.update(updateData, {
      where: { id }
    });
    return await shipmentModel.findByPk(id);
  };
  
  const remove = async (id) => {
    return await shipmentModel.destroy({
      where: { id }
    });
  };
  module.exports = {
    create,
    findById,
    findAll,
    update,
    remove,
  };