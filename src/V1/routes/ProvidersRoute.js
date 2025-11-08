const express = require("express");

const ProvidersRoute = express().router;
const ProvidersController = require("../controllers/controller.provider");

ProvidersRoute.get("/my-patients", ProvidersController.getAllAssignedPatients);

module.exports = ProvidersRoute;
