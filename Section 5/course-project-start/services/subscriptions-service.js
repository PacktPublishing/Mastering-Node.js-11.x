const Subscription = require("../models/index")["Subscription"];

module.exports = class SubscriptionService {
    async findAll(userId) {
        return await Subscription.findAll({where: {userId}});
    }

    async findOne(id) {
        return await Subscription.findOne({where: {id}});
    }

    async create(subscription) {
        return await Subscription.create(subscription);
    }

    async deleteOne(id) {
        return await Subscription.destroy({where: {id}});
    }
}