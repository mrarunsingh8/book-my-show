const Joi = require("joi");

const sheetSchema = Joi.object({
    screenId: Joi.number().required(),
    row: Joi.string().required(),
    sheetNumber: Joi.number().required()
});

const bookingsSheetsValidation = Joi.array().items(sheetSchema).min(1).required();

module.exports = bookingsSheetsValidation;