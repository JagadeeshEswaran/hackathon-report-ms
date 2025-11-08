import express from "express";
import { getAllAssignedPatients } from "../controllers/providerController.js";

const ProvidersRoute = express().router;

ProvidersRoute.get("/my-patients", getAllAssignedPatients);

export default ProvidersRoute;
