const citiesController = require("../controllers/citiesController");
const moviesController = require("../controllers/moviesController");
const theatresController = require("../controllers/theatresController");


const routesConfig = require("express").Router();

routesConfig.use("/cities", citiesController);

routesConfig.use("/theatres", theatresController);

routesConfig.use("/movies", moviesController);

module.exports = routesConfig;