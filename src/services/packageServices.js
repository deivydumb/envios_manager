const Package = require('../models/packageModel');
const shipmentModel = require('../models/shipmentModel');
const packageRepository = require('../repositories/packageRepository');
const userRepository = require('../repositories/userRepository');




const createPackage = async (packageData) => {
  const { shipmentId } = packageData;
  const shipment = await shipmentModel.findByPk(shipmentId);
  if (!shipment) {
    throw {
      status: 400,
      message: `El shipment con ID ${shipmentId} no existe`,
      code: 'SHIPMENT_NOT_FOUND'
    };
  }

  return await packageRepository.create(packageData);
};


const findAll = async () => {
  return await packageRepository.findAll();
};

const findById = async (id) => {
  const pkg = await packageRepository.findById(id);
  if (!pkg) {
    throw {
      status: 404,
      message: `Paquete con ID ${id} no encontrado`,
      code: 'PACKAGE_NOT_FOUND'
    };
  }
  return pkg;
};

const update = async (id, updateData) => {
  if (updateData.shipmentId !== undefined) {
    throw {
      status: 400,
      message: "No se permite modificar el shipmentId de un paquete",
      code: "SHIPMENT_UPDATE_NOT_ALLOWED"
    };
  }

  const pkg = await packageRepository.findById(id);
  if (!pkg) {
    throw {
      status: 404,
      message: `Paquete con ID ${id} no encontrado`,
      code: 'PACKAGE_NOT_FOUND'
    };
  }

  return await packageRepository.update(id, updateData);
};

const remove = async (id) => {
  const pkg = await packageRepository.findById(id);
  if (!pkg) {
    throw {
      status: 404,
      message: `Paquete con ID ${id} no encontrado`,
      code: 'PACKAGE_NOT_FOUND'
    };
  }

  await packageRepository.remove(id);
  return { message: `Paquete con ID ${id} eliminado exitosamente` };
};


  module.exports = {
    createPackage,
    findAll,
    findById,
    update,
    remove,
  };