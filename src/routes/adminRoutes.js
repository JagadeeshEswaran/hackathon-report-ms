import express from "express";
import {
  addNewGoal,
  addNewPatient,
  addNewUser,
  getAllGoals,
  getAllPatients,
  getAllUsers,
} from "../controllers/adminController.js";

const AdminRoutes = express().router;

AdminRoutes.post("/add-user", addNewUser);
AdminRoutes.get("/users", getAllUsers);

AdminRoutes.post("/add-patient", addNewPatient);
AdminRoutes.get("/patients", getAllPatients);

AdminRoutes.post("/add-activity", addNewGoal);
AdminRoutes.get("/all-activities", getAllGoals);

export default AdminRoutes;
