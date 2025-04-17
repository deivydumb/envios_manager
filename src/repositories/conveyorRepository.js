const Conveyor = require('../models/conveyorModel.js');

const create = async (data) => {
  return await Conveyor.create(data);
};

const update = async (id, data) => {
  const conveyor = await Conveyor.findByPk(id);
  if (!conveyor) return null;
  return await conveyor.update(data);
};

const findAll = async () => {
  return await Conveyor.findAll();
};

const findById = async (id) => {
  return await Conveyor.findByPk(id);
};

module.exports = {
  create,
  update,
  findAll,
  findById
};
