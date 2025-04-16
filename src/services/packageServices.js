const Package = require('../models/packageModel');
const packageRepository = require('../repositories/packageRepository');
const userRepository = require('../repositories/userRepository');




const getAllPackage = () => {
  return packageRepository.getAllPackage();
};

const getPackageById = async (id) => {
  return await packageRepository.findById(id); 
};

const createPackage = async (packageData, userId) => {
    const requiredFields = ['peso', 'largo', 'ancho', 'unidades'];
    const missingFields = requiredFields.filter(field => !packageData[field]);
    if (missingFields.length > 0) {
      throw {
        status: 400,
        message: `Faltan campos obligatorios: ${missingFields.join(', ')}`,
        code: 'MISSING_FIELDS'
      };
    }
    const userExists = await userRepository.findById(userId);
    if (!userExists) {
      throw {
        status: 404,
        message: 'Usuario no encontrado',
        code: 'USER_NOT_FOUND',
        details: { userId }
      };
    }
  
    return await packageRepository.create({
      ...packageData,
      userId 
    });
  };

  const updatePackage = async (id, updateData) => {
    try {
      const updated = await packageRepository.update(id, updateData);
      if (!updated) {
        const error = new Error('Paquete no encontrado');
        error.status = 404;
        throw error;
      }
      return updated;
    } catch (error) {
      throw error;
    }
  };
  


  module.exports = {
    createPackage,
    getAllPackage,
    getPackageById,
    updatePackage
  };