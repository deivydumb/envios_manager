const service = require('../services/packageServices.js');
const Package = require('../models/packageModel.js');
const {buildResponse, buildValidationError }= require('../utils/responseBuilder.js');



const getAllPackage = async (req, res) => {
  try {
    const users = await service.getAllPackage();
    if (!users || users.length === 0) {
      return res.status(404).json(buildResponse({ message: 'No hay paquetes', status: 404, data: null }));
    }
    res.status(200).json(buildResponse({ mensaje: 'Lista de usuarios', status: 200, data: users }));
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json(buildResponse({ message: 'Error al obtener los usuarios', status: 500, data: null }));
  }
};

const getPackageById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await service.getPackageById(id);

    if (!user) {
      return res.status(404).json(buildResponse({
        status: 404,
        mensaje: "Paquete no encontrado",
        data: null
      }));
    }
    res.status(200).json(buildResponse({
      status: 200,
      mensaje: "Usuario encontrado",
      data: user
    }));
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json(buildResponse({
      status: 500,
      mensaje: "Error interno del servidor",
      data: null
    }));
  }
};
const updatePackage = async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
  
      const updatedPackage = await service.updatePackage(id, updateData);
  
      res.status(200).json({
        status: 200,
        mensaje: "Paquete actualizado correctamente",
        data: updatedPackage
      });
  
    } catch (error) {
      res.status(error.status || 500).json({
        status: error.status || 500,
        mensaje: error.message || 'Error al actualizar el paquete',
        data: null
      });
    }
  };
  
const createPackage = async (req, res) => {
    console.log('Request body:', req.body);
    try {
    const { userId } = req.body;
    const newPackage = await service.createPackage(req.body, userId);
      
      res.status(201).json({
        status: 201,
        mensaje: "Paquete creado exitosamente",
        data: newPackage
      });
  
    } catch (error) {
      res.status(error.status || 400).json({
        status: error.status || 400,
        mensaje: error.message || 'Error al crear paquete',
        data: {
          errorDetails: {
            code: error.code || 'VALIDATION_ERROR',
            ...(error.details && { details: error.details })
          }
        }
      });
    }
  };

  module.exports = {
    createPackage,
    getAllPackage,
    getPackageById,
    updatePackage
  }