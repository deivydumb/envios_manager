const e = require('express');
const shipmentRepository =  require('../repositories/shipmentRepository');
const userRepository = require('../repositories/userRepository');
const packageModel = require('../models/packageModel');
const { Sequelize } = require('sequelize'); // Import Sequelize


const createShipment = async (packageData, userId) => {
    const requiredFields = ['codigo_seguimiento', 'fecha_envio', 'fecha_entrega_estimada', 'estado', 'costo', 'ciudad_origen', 'direccion_origen', 'ciudad_destino', 'direccion_destino'];  
    const missingFields = requiredFields.filter(field => !(packageData && packageData[field]));   
    if (missingFields.length > 0) {
        console.log('missingFields', missingFields);
      throw {
        status: 400,
        message: `Faltan campos obligatorios: ${missingFields.join(', ')}`,
        code: 'MISSING_FIELDS'
      };
    }
    if (typeof userId === 'object' && userId.id) {
        userId = userId.id;
    }
    const userExists = await userRepository.findById(userId);
    if (!userExists) {
      throw {
        status: 404,
        message: 'Usuario no encontrado',
        code: 'USER_NOT_FOUND',
        details: { userId }
      };
    }
    return await shipmentRepository.create({
      ...packageData,
      userId 
    });
  };

  const findAll = async () => {
    return await shipmentRepository.findAll();
  };
  
  const findById = async (id) => {
    const shipment = await shipmentRepository.findById(id);
    if (!shipment) {
      throw {
        status: 404,
        message: `Shipment con ID ${id} no encontrado`,
        code: 'SHIPMENT_NOT_FOUND'
      };
    }
    return shipment;
  };
  
  const update = async (id, updateData) => {
    if (updateData.userId !== undefined) {
      throw {
        status: 400,
        message: "No se permite modificar el userId de un shipment",
        code: "USER_UPDATE_NOT_ALLOWED"
      };
    }
  
    const shipment = await shipmentRepository.findById(id);
    if (!shipment) {
      throw {
        status: 404,
        message: `Shipment con ID ${id} no encontrado`,
        code: 'SHIPMENT_NOT_FOUND'
      };
    }
  
    return await shipmentRepository.update(id, updateData);
  };
  
  const remove = async (id) => {
    const shipment = await shipmentRepository.findById(id);
    if (!shipment) {
      throw {
        status: 404,
        message: `Shipment con ID ${id} no encontrado`,
        code: 'SHIPMENT_NOT_FOUND'
      };
    }
  
    await shipmentRepository.remove(id);
    return { message: `Shipment con ID ${id} eliminado exitosamente` };
  };

  
  module.exports = {
    createShipment,
    findAll,
    findById,
    update,
    remove,
  }