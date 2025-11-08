import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "DEV" ? ".env.dev" : ".env.prod",
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("------------------------------------------");
  console.log(`App is Running @ ${PORT}`);
  console.log("------------------------------------------");
});
