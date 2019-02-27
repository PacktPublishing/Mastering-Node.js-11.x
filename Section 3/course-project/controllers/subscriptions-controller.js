const router = require("express").Router();
const asyncWrapper = require("../utilities/async-wrapper").AsyncWrapper;
const SubscriptionsService = require("../services/subscriptions-service");

const subscriptionsService = new SubscriptionsService();

//GET api/subscriptions
router.get("/", asyncWrapper(async (req, res) => {
    let userId = null;
    let subscriptions = await subscriptionsService.findAll(userId);
    res.send(subscriptions);
}));

//GET api/subscriptions/:id
router.get("/:id", asyncWrapper(async (req, res) => {
    let subscription = await subscriptionsService.findOne(req.params.id);
    res.send(subscription);
}));

//POST api/subscriptions
router.post("/", asyncWrapper(async (req, res) => {
    let subscription = await subscriptionsService.create(req.body);
    res.send(subscription);
}));

//DELETE api/subscriptions
router.delete("/:id", asyncWrapper(async (req, res) => {
    await subscriptionsService.deleteOne(req.params.id);
    return res.sendStatus(200);
}));

module.exports = router;