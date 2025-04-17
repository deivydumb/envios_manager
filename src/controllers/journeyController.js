const journeyService = require('../services/journeyService');
const { buildResponse } = require('../utils/responseBuilder.js');

const create = async (req, res) => {
  try {
    const journey = await journeyService.createJourney(req.body);
    res.status(201).json(buildResponse({ message: 'Ruta creada', status: 201, data: journey }));
  } catch (error) {
    res.status(400).json(buildResponse({ message: error.message, status: 400 }));
  }
};

const getAll = async (req, res) => {
  try {
    const journeys = await journeyService.getAllJourneys();
    res.json(buildResponse({ message: 'Rutas obtenidas', status: 200, data: journeys }));
  } catch (error) {
    res.status(500).json(buildResponse({ message: 'Error al obtener las rutas', status: 500 }));
  }
};

const getById = async (req, res) => {
  try {
    const journey = await journeyService.getJourneyById(req.params.id);
    if (!journey) {
      return res.status(404).json(buildResponse({ message: 'Ruta no encontrada', status: 404 }));
    }
    res.json(buildResponse({ message: 'Ruta obtenida', status: 200, data: journey }));
  } catch (error) {
    res.status(500).json(buildResponse({ message: 'Error al obtener la ruta', status: 500 }));
  }
};

const update = async (req, res) => {
  try {
    const journey = await journeyService.updateJourney(req.params.id, req.body);
    if (!journey) {
      return res.status(404).json(buildResponse({ message: 'Ruta no encontrada', status: 404 }));
    }
    res.json(buildResponse({ message: 'Ruta actualizada', status: 200, data: journey }));
  } catch (error) {
    res.status(400).json(buildResponse({ message: error.message, status: 400 }));
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update
};
