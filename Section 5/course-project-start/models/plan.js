const Joi = require("joi");

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
  };
  return Plan;
};


module.exports.PlanValidationSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().positive().allow(0).required(),
    type: Joi.string().valid("monthly", "yearly").required(),
    userId: Joi.number().positive().required()
})