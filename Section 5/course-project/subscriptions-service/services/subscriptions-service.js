const axios = require("axios");
const Subscription = require("../models/index")["Subscription"];
const ValidationError = require("../../errors/validation-error");
const AmqpService = require("./amqp-service");

module.exports = class SubscriptionService {
    constructor() {
        this.amqpService = new AmqpService(process.env.AMQP_CONNECTION_STRING, process.env.AMQP_CHANNEL_NAME, process.env.AMQP_QUEUE_NAME);
    }

    async findAll(userId) {
        return await Subscription.findAll({where: {userId}});
    }

    async findOne(id) {
        return await Subscription.findOne({where: {id}});
    }

    async create(subscription) {
        let response = await axios.default.get(`http://localhost:3001/${subscription.planId}`);
        await this.amqpService.init();
        let plan = response.data;
        if(!plan) {
            throw new ValidationError("given plan is invalid");
        }
        subscription = await Subscription.create(subscription);
        return await this.amqpService.send(JSON.stringify({plan, subscription}));
    }

    async deleteOne(id) {
        return await Subscription.destroy({where: {id}});
    }
}