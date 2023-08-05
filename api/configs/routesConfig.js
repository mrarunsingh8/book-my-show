const citiesController = require("../controllers/citiesController");
const theatresController = require("../controllers/theatresController");


const routesConfig = require("express").Router();

routesConfig.use("/cities", citiesController);

routesConfig.use("/theatres", theatresController);

module.exports = routesConfig;