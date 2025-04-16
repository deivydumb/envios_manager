const conveyorRepository = require('../repositories/conveyorRepository');

const createConveyor = async (data) => {
  return await conveyorRepository.create(data);
};

const updateConveyor = async (id, data) => {
  return await conveyorRepository.update(id, data);
};

const getAllConveyors = async () => {
  return await conveyorRepository.findAll();
};

const getConveyorById = async (id) => {
  return await conveyorRepository.findById(id);
};

module.exports = {
  createConveyor,
  updateConveyor,
  getAllConveyors,
  getConveyorById
};
