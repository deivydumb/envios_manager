const Journey = require('../models/Journey');

const create = async (data) => {
  return await Journey.create(data);
};

const findAll = async () => {
  return await Journey.findAll();
};

const findById = async (id) => {
  return await Journey.findByPk(id);
};

const update = async (id, data) => {
  const journey = await Journey.findByPk(id);
  if (!journey) return null;
  await journey.update(data);
  return journey;
};

module.exports = {
  create,
  findAll,
  findById,
  update
};
