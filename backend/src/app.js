const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

class App {
  constructor() {
    this.express = express();

    this.middlewares();

    this.express.use("/", routes);
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }
}

module.exports = new App().express;
