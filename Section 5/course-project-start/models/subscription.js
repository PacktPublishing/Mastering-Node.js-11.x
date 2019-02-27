const Joi = require("joi");

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    planId: DataTypes.INTEGER,
    coupon: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    holderName: DataTypes.STRING,
    expirationDate: DataTypes.STRING,
    cvv: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};

module.exports.SubscriptionValidationSchema = Joi.object().keys({
    planId: Joi.number().positive().required(),
    coupon: Joi.number().min(0).max(100).optional().allow(null),
    cardNumber: Joi.string().creditCard().required(),
    holderName: Joi.string().alphanum().required(),
    expirationDate: Joi.string().required(),
    cvv: Joi.string().min(3).max(3).required()
});