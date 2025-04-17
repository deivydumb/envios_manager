const conveyorService = require('../services/conveyorService');
const {buildResponse, buildValidationError }= require('../utils/responseBuilder.js');
const create = async (req, res) => {
  try {
    const conveyor = await conveyorService.createConveyor(req.body);
    res.status(201).json(buildResponse({ message: 'Conveyor creado', status: 201, data: conveyor }));
  } catch (err) {
    res.status(500).json(buildResponse({ message: 'Error creando el conveyor', status: 500, data: null }));
  }
};

const update = async (req, res) => {
  try {
    const conveyor = await conveyorService.updateConveyor(req.params.id, req.body);
    if (!conveyor) return res.status(404).json({ message: 'Conveyor no encontrado' });
    res.json(buildResponse({ message: 'Conveyor actualizado', status: 200, data: conveyor }));  
  } catch (err) {
    res.status(500).json(buildResponse({ message: 'Error actualizando el conveyor', status: 500, data: null }));
  }
};

const getAll = async (_req, res) => {
  try {
    const conveyors = await conveyorService.getAllConveyors();
    res.json(buildResponse({ message: 'Lista de conveyors', status: 200, data: conveyors }));
  } catch (err) {
    res.status(500).json(buildResponse  ({ message: 'Error obteniendo la lista de conveyors', status: 500, data: null }));
  }
};

const getById = async (req, res) => {
  try {
    const conveyor = await conveyorService.getConveyorById(req.params.id);
    if (!conveyor) return res.status(404).json(buildResponse({ message: 'Conveyor no encontrado', status: 404, data: null }));
    res.json(conveyor);
  } catch (err) {
    res.status(500).json(buildResponse({ message: 'Error obteniendo el conveyor', status: 500, data: null }));
  }
};

module.exports = {
  create,
  update,
  getAll,
  getById
};
