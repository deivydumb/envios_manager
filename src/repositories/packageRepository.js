const { get } = require('http');
const packageModel = require('../models/packageModel');
const User = require('../models/userModel');
const Package = require('../models/packageModel');
const Shipment = require('../models/shipmentModel');




const findAll = async () => {
  return await packageModel.findAll();
};

const findById = async (id) => {
  return await packageModel.findByPk(id, {
    include: [{
      model: Shipment,
      as: 'shipment',
      attributes: ['id', 'estado', 'codigo_seguimiento']
    }]
  });
}

const update = async (id, updateData) => {
  await packageModel.update(updateData, {
    where: { id }
  });
  return await packageModel.findByPk(id);
};

const remove = async (id) => {
  return await packageModel.destroy({
    where: { id }
  });
};

  const findByIds = async (ids) => {
    console.log('ids', ids);
    if (!Array.isArray(ids)) {
      throw {
        status: 400,
        code: 'INVALID_ARGUMENT',
        message: 'The argument "ids" must be an array.'
      };
    }
    return await Package.findAll({ where: { id: ids } });
  };

  const create = async (packageData) => {
      return await packageModel.create(packageData);
    } 
  
  
  

  module.exports = {
    create,
    findAll,
    findById,
    findByIds,
    update,
    }