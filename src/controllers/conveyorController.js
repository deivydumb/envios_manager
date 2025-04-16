const conveyorService = require('../services/conveyorService');

const create = async (req, res) => {
  try {
    const conveyor = await conveyorService.createConveyor(req.body);
    res.status(201).json(conveyor);
  } catch (err) {
    res.status(500).json({ message: 'Error creando el conveyor', error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const conveyor = await conveyorService.updateConveyor(req.params.id, req.body);
    if (!conveyor) return res.status(404).json({ message: 'Conveyor no encontrado' });
    res.json(conveyor);
  } catch (err) {
    res.status(500).json({ message: 'Error actualizando el conveyor', error: err.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const conveyors = await conveyorService.getAllConveyors();
    res.json(conveyors);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo conveyors', error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const conveyor = await conveyorService.getConveyorById(req.params.id);
    if (!conveyor) return res.status(404).json({ message: 'Conveyor no encontrado' });
    res.json(conveyor);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo conveyor', error: err.message });
  }
};

module.exports = {
  create,
  update,
  getAll,
  getById
};
