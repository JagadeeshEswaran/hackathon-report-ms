import express from "express";
const CORS = require("cors");
const dotenv = require("dotenv");

// const v1_router = require("./src/V1/routes");
const errorHandler = require("./src/utils/errorHandler");
const ApiError = require("./src/utils/ApiError");
const { default: mongoose } = require("mongoose");
const router_v1 = require("./src/V1/routes");

dotenv.config({
  path: process.env.NODE_ENV === "DEV" ? ".env.dev" : ".env.prod",
});

const app = express();

const corsOptions = {
  // origin: process.env.ALLOWED_ORIGINS.split(","),
  origin: "*",
  method: "GET,POST,UPDATE,PUT,PATCH",
};

app.use(express.json());
app.use(CORS(corsOptions));

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err));

app.use("/api/v1", router_v1);

app.use(errorHandler);

export default app;
