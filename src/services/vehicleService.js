const vehicleRepository = require("../repositories/vehicleRepository");

const create = async (data) => {
  try {
    return await vehicleRepository.create(data);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw {
        status: 400,
        message: `Dato duplicado: ${error.errors[0].path}`,
        code: "DUPLICATE_FIELD"
      };
    }
    throw {
      status: 500,
      message: "Error al crear vehículo",
      code: "DATABASE_ERROR",
      originalError: error.message
    };
  }
};

const findAll = async () => {
  return await vehicleRepository.findAll();
};

const findById = async (id) => {
  const vehicle = await vehicleRepository.findById(id);
  if (!vehicle) {
    throw {
      status: 404,
      message: "Vehículo no encontrado",
      code: "NOT_FOUND"
    };
  }
  return vehicle;
};

const update = async (id, data) => {
  const vehicle = await vehicleRepository.update(id, data);
  if (!vehicle) {
    throw {
      status: 404,
      message: "Vehículo no encontrado",
      code: "NOT_FOUND"
    };
  }
  return vehicle;
};

const remove = async (id) => {
  const vehicle = await vehicleRepository.remove(id);
  if (!vehicle) {
    throw {
      status: 404,
      message: "Vehículo no encontrado",
      code: "NOT_FOUND"
    };
  }
  return vehicle;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};
