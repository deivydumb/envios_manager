const journeyService = require('../services/journeyService');

const create = async (req, res) => {
  try {
    const journey = await journeyService.createJourney(req.body);
    res.status(201).json(journey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const journeys = await journeyService.getAllJourneys();
    res.json(journeys);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las rutas' });
  }
};

const getById = async (req, res) => {
  try {
    const journey = await journeyService.getJourneyById(req.params.id);
    if (!journey) {
      return res.status(404).json({ error: 'Ruta no encontrada' });
    }
    res.json(journey);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la ruta' });
  }
};

const update = async (req, res) => {
  try {
    const journey = await journeyService.updateJourney(req.params.id, req.body);
    if (!journey) {
      return res.status(404).json({ error: 'Ruta no encontrada' });
    }
    res.json(journey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update
};
