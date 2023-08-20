const authController = require("../controllers/authController");
const bookingsController = require("../controllers/bookingsController");
const citiesController = require("../controllers/citiesController");
const moviesController = require("../controllers/moviesController");
const theatresController = require("../controllers/theatresController");


const routesConfig = require("express").Router();

routesConfig.use("/auth", authController);

routesConfig.use("/cities", citiesController);

routesConfig.use("/theatres", theatresController);

routesConfig.use("/movies", moviesController);

routesConfig.use("/bookings", bookingsController);

module.exports = routesConfig;