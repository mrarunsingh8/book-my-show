const express = require("express");
const bodyParser = require("body-parser");
const routesConfig = require("./configs/routesConfig");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routesConfig);

module.exports = app;