const Joi = require("joi");

module.exports.PlanValidationSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().positive().allow(0).required(),
    type: Joi.string().valid("monthly", "yearly").required(),
    userId: Joi.number().positive().required()
})