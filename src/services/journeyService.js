const journeyRepository = require('../repositories/journeyRepository');
const conveyorRepository = require('../repositories/conveyorRepository');

const createJourney = async (data) => {
  const conveyor = await conveyorRepository.findById(data.transportistaId);
  if (!conveyor) {
    throw new Error('El transportista especificado no existe');
  }

  return await journeyRepository.create(data);
};

const getAllJourneys = async () => {
  return await journeyRepository.findAll();
};

const getJourneyById = async (id) => {
  return await journeyRepository.findById(id);
};

const updateJourney = async (id, data) => {
  if (data.transportistaId) {
    const conveyor = await conveyorRepository.findById(data.transportistaId);
    if (!conveyor) {
      throw new Error('El transportista especificado no existe');
    }
  }
  return await journeyRepository.update(id, data);
};

module.exports = {
  createJourney,
  getAllJourneys,
  getJourneyById,
  updateJourney
};
