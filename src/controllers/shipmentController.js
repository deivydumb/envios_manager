const shipmentService = require('../services/shipmentServices'); // Asegúrate de que la ruta sea correcta
const {buildResponse, buildValidationError }= require('../utils/responseBuilder.js');

const createShipment = async (req, res) => {
    try {
    const { userId } = req.body;
    const newPackage = await shipmentService.createShipment(req.body, userId);
      
      res.status(201).json(buildResponse({
        status: 201,
        mensaje: "Shipment creado exitosamente",
        data: newPackage
      })
      );
    } catch (error) {
      res.status(error.status || 400).json({
        status: error.status || 400,
        mensaje: error.message || 'Error al crear paquete',
        data: {
          errorDetails: {
            code: error.code || 'VALIDATION_ERROR',
            ...(error.details && { details: error.details })
          }
        }
      });
    }
  };
  const findAll = async (req, res) => {
    try {
      const shipments = await shipmentService.findAll();
      res.status(200).json(buildResponse({
        status: 200,
        mensaje: "Lista de shipments",
        data: shipments
      }));
    if(!shipments || shipments.length === 0) {
        return res.status(404).json(buildResponse({
          status: 404,
          mensaje: "No hay shipments registrados",
          data: null
        }));
      }
    } catch (error) {
      res.status(500).json({
        message: error.message || 'Error al obtener los shipments',
        code: error.code || 'INTERNAL_SERVER_ERROR'
      });
    }
  };
  
  const findById = async (req, res) => {
    try {
      const shipment = await shipmentService.findById(req.params.id);
      res.status(200).json(buildResponse({
        status: 200,
        mensaje: "Shipment encontrado",
        data: shipment
      }));
      if(!shipment) {
        return res.status(404).json(buildResponse({
          status: 404,
          mensaje: "Shipment no encontrado",
          data: null
        }));
      }
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
        code: error.code
      });
    }
  };
  
  const update = async (req, res) => {
    try {
      const updated = await shipmentService.update(req.params.id, req.body);
      res.status(200).json(buildResponse({
        status: 200,
        mensaje: "Shipment actualizado",
        data: updated
      }));
      if(!updated) {
        return res.status(404).json(buildResponse({
          status: 404,
          mensaje: "Shipment no encontrado",
          data: null
        }));
      }
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
        code: error.code
      });
    }
  };
  
  const remove = async (req, res) => {
    try {
      const result = await shipmentService.remove(req.params.id);
      res.status(200).json(buildResponse({
        status: 200,
        mensaje: "Shipment eliminado",
        data: result
      }));
      if(!result) {
        return res.status(404).json(buildResponse({
          status: 404,
          mensaje: "Shipment no encontrado",
          data: null
        }));
      }
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message,
        code: error.code
      });
    }
  };
  


module.exports = {
  createShipment,
  findAll,
  findById,
  update,
  remove,
};
