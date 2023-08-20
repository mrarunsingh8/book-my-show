const Joi = require("joi");

const citiesValidation = Joi.object({
    name: Joi.string().required()
});

module.exports = citiesValidation;