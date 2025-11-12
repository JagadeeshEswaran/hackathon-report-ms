import express from "express";
import userController from "../controllers/userController.js";

const UserRoutes = express().router;

UserRoutes.get("/all-activities", userController.getAllActivities);
UserRoutes.post("/add-goals", userController.getAllActivities);

export default UserRoutes;
