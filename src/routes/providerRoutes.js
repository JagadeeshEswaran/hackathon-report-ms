import express from "express";
import { getAllAssignedPatients } from "../controllers/providerController.js";

const ProvidersRoute = express().router;

ProvidersRoute.get("/my-patients", getAllAssignedPatients);
ProvidersRoute.get("/patient-goals", getAllAssignedPatients);

export default ProvidersRoute;
