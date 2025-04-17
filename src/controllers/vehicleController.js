const vehicleService = require("../services/vehicleService");
const { buildResponse } = require("../utils/responseBuilder");

const create = async (req, res) => {
    try {
        const result = await vehicleService.create(req.body);
        res.status(201).json(buildResponse({
            status: 201,
            message: "Vehicle created",
            data: result
        }));
    } catch (error) {
        res.status(error.status || 500).json(buildResponse({
            status: error.status || 500,
            message: error.message
        }));
    }
};

const findAll = async (_req, res) => {
    try {
        
        const vehicles = await vehicleService.findAll();
        if(!vehicles || vehicles.length === 0) {
            return res.status(404).json(buildResponse({
                status: 404,
                message: "No vehicles found",
                data: null
            }));
        }
        res.json(buildResponse({
            status: 200,
            message: "Vehicles retrieved successfully",
            data: vehicles
        }));

    } catch (error) {
        res.status(error.status || 500).json(buildResponse({
            status: error.status || 500,
            message: error.message
        }));
    }
};

const findById = async (req, res) => {
    try {
        const vehicle = await vehicleService.findById(req.params.id);
        res.json(buildResponse({
            status: 200,
            message: "Vehicle retrieved successfully",
            data: vehicle
        }));
    } catch (error) {
        res.status(error.status || 500).json(buildResponse({
            status: error.status || 500,
            message: error.message
        }));
    }
};

const update = async (req, res) => {
    try {
        const vehicle = await vehicleService.update(req.params.id, req.body);
        res.json(buildResponse({
            status: 200,
            message: "Vehicle updated successfully",
            data: vehicle
        }));
    } catch (error) {
        res.status(error.status || 500).json(buildResponse({
            status: error.status || 500,
            message: error.message
        }));
    }
};

const remove = async (req, res) => {
    try {
        const vehicle = await vehicleService.remove(req.params.id);
        res.json(buildResponse({
            status: 200,
            message: "Vehicle removed successfully",
            data: vehicle
        }));
    } catch (error) {
        res.status(error.status || 500).json(buildResponse({
            status: error.status || 500,
            message: error.message
        }));
    }
};

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
};
