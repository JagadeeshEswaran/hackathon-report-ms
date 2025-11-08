const chalk = require("chalk");
const app = require("./app.js");
const dotenv = require("dotenv");

dotenv.config({
  path: process.env.NODE_ENV === "DEV" ? ".env.dev" : ".env.prod",
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(chalk.cyan("------------------------------------------"));
  console.log(`App is Running @ ${PORT}`);
  console.log(chalk.cyan("------------------------------------------"));
});
