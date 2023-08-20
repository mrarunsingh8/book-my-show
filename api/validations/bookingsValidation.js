const Joi = require("joi");

const bookingsValidation = Joi.object({
    cityId: Joi.number().required(),
    theatreId: Joi.number().required(),
    movieId: Joi.number().required(),
    showId: Joi.number().required(),
    date: Joi.date().required(),
    timing: Joi.string().required()
});

module.exports = bookingsValidation;