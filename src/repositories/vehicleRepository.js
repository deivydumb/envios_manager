const vehicleModel = require("../models/vehicleModel");

const create = async (vehicleData) => {
  return await vehicleModel.create(vehicleData);
};

const findAll = async () => {
  return await vehicleModel.findAll();
};

const findById = async (id) => {
  return await vehicleModel.findByPk(id);
};

const update = async (id, vehicleData) => {
  const vehicle = await vehicleModel.findByPk(id);
  if (!vehicle) return null;
  return await vehicle.update(vehicleData);
};

const remove = async (id) => {
  const vehicle = await vehicleModel.findByPk(id);
  if (!vehicle) return null;
  await vehicle.destroy();
  return vehicle;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};
