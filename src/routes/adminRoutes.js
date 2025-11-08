import express from "express";
import {
  addNewPatient,
  addNewUser,
  getAllPatients,
  getAllUsers,
} from "../controllers/adminController.js";

const AdminRoutes = express().router;

AdminRoutes.post("/add-user", addNewUser);
AdminRoutes.get("/users", getAllUsers);

AdminRoutes.post("/add-patient", addNewPatient);
AdminRoutes.get("/patients", getAllPatients);

export default AdminRoutes;
