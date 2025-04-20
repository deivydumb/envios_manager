const packageService = require('../services/packageServices.js');
const { buildResponse, buildValidationError } = require('../utils/responseBuilder.js');

const findAll = async (_, res) => {
  try {
    const packages = await packageService.findAll();
    if (!packages || packages.length === 0) {
      return res.status(404).json(buildResponse({
        status: 404,
        message: "No hay paquetes registrados",
        data: null
      }));
    }
    res.status(200).json(buildResponse({
      status: 200,
      message: "Lista de paquetes",
      data: packages
    }));
  } catch (error) {
    res.status(500).json(buildResponse({
      status: 500,
      message: error.message || 'Error al obtener los paquetes',
      data: null
    }));
  }
};

const findById = async (req, res) => {
  try {
    const pkg = await packageService.findById(req.params.id);
    res.status(200).json(buildResponse({
      status: 200,
      message: "Paquete encontrado",
      data: pkg
    }));
  } catch (error) {
    res.status(error.status || 500).json(buildResponse({
      status: error.status || 500,
      message: error.message || 'Error al buscar el paquete',
      data: null
    }));
  }
};

const update = async (req, res) => {
  try {
    const updated = await packageService.update(req.params.id, req.body);
    res.status(200).json(buildResponse({
      status: 200,
      message: "Paquete actualizado",
      data: updated
    }));
  } catch (error) {
    res.status(error.status || 500).json(buildResponse({
      status: error.status || 500,
      message: error.message || 'Error al actualizar el paquete',
      data: null
    }));
  }
};

const remove = async (req, res) => {
  try {
    const result = await packageService.remove(req.params.id);
    res.status(200).json(buildResponse({
      status: 200,
      message: "Paquete eliminado",
      data: result
    }));
  } catch (error) {
    res.status(error.status || 500).json(buildResponse({
      status: error.status || 500,
      message: error.message || 'Error al eliminar el paquete',
      data: null
    }));
  }
};

const createPackage = async (req, res) => {
  try {
    const newPackage = await packageService.createPackage(req.body);
    res.status(201).json(buildResponse({
      status: 201,
      message: "Paquete creado exitosamente",
      data: newPackage
    }));
  } catch (error) {
    res.status(error.status || 500).json(buildResponse({
      status: error.status || 500,
      message: error.message || 'Error interno del servidor',
      data: null
    }));
  }
};

const assignJourneyToPackage = async (req, res) => {
  const packageId = req.params.id;
  const { journeyId } = req.body;

  try {
    const updatedPackage = await packageService.assignJourneyToPackage(packageId, journeyId);
    res.status(200).json(buildResponse({
      status: 200,
      message: "Viaje asignado al paquete",
      data: updatedPackage
    }));
  } catch (error) {
    res.status(400).json(buildResponse({
      status: 400,
      message: error.message || 'Error al asignar el viaje al paquete',
      data: null
    }));
  }
};

const getPackagesEnEspera = async (req, res) => {
  try {
    const packages = await packageService.getPackagesEnEspera();
    res.json(buildResponse({ 
        status: 200,
        message: "Paquetes en espera",
        data : packages 
    }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }


};



module.exports = {
  createPackage,
  findAll,
  remove,
  findById,
  update,
  getPackagesEnEspera
};