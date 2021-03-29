const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

class App {
  constructor() {
    this.express = express();

    this.express.use("/", routes);

    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }
}

module.exports = new App().express;
