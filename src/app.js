import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import ProvidersRoute from "./routes/providerRoutes.js";
import AdminRoutes from "./routes/adminRoutes.js";
import bodyParser from "body-parser";
import UserRoutes from "./routes/userRoutes.js";

// require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/test", (req, res) => {
  return res.send({ message: "API Test Success..!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/provdr", ProvidersRoute);
app.use("/api/admin", AdminRoutes);
app.get("/health", (_req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on :${port}`));
});
