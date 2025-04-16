const packageService = require('../services/packageServices.js');
const {buildResponse, buildValidationError }= require('../utils/responseBuilder.js');



const findAll = async (_, res) => {
  try {
    const packages = await packageService.findAll();
    if(!packages || packages.length === 0) {
      return res.status(404).json(buildResponse({
        status: 404,
        mensaje: "No hay paquetes registrados",
        data: null
      }));
    }
    res.status(200).json(buildResponse({
      status: 200,
      mensaje: "Lista de paquetes",
      data: packages
    }));
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error al obtener los paquetes',
      code: error.code || 'INTERNAL_SERVER_ERROR'
    });
  }
};

const findById = async (req, res) => {
  try {
    const pkg = await packageService.findById(req.params.id);
    res.status(200).json(buildResponse({
      status: 200,
      mensaje: "Paquete encontrado",
      data: pkg
    }));
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message,
      code: error.code
    });
  }
};

const update = async (req, res) => {
  try {
    const updated = await packageService.update(req.params.id, req.body);
    res.status(200).json(buildResponse({
      status: 200,
      mensaje: "Paquete actualizado",
      data: updated
    }));
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message,
      code: error.code
    });
  }
};

const remove = async (req, res) => {
  try {
    const result = await packageService.remove(req.params.id);
    res.status(200).json(buildResponse({
      result
    }));
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message,
      code: error.code
    });
  }
};
  
  const createPackage = async (req, res) => {
    try {
      const newPackage = await packageService.createPackage(req.body);
      res.status(201).json(buildResponse({
        status: 201,
        mensaje: "Paquete creado exitosamente",
        data: newPackage
      }));
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || 'Error interno del servidor',
        code: error.code || 'INTERNAL_SERVER_ERROR',
      });
    }
  };
  

  module.exports = {
    createPackage,
    findAll,
    remove,
    findById,
    update,
  }