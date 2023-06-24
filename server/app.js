const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const chalk = require("chalk");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));
    console.log(chalk.green("mongoDB connected"));
    app.listen(PORT, () =>
      console.log(chalk.green(`Server has been started on port: ${PORT}`))
    );
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
