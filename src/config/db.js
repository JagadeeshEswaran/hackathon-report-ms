import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI not set");
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ Mongo error:", err));
  console.log("MongoDB connected");
};
