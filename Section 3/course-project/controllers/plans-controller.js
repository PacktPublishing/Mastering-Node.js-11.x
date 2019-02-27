const router = require("express").Router();
const asyncWrapper = require("../utilities/async-wrapper").AsyncWrapper;
const PlansService = require("../services/plans-service");
const validator = require("../middleware/validator");

const plansService = new PlansService();

//GET api/plans
router.get("/", asyncWrapper(async (req, res) => {
    let userId = null;
    let plans = await plansService.findAll(userId);
    res.send(plans);
}));

//GET api/plans/:id
router.get("/:id", asyncWrapper(async (req, res) => {
    let id = req.params.id;
    let userId = null;
    let plan = await plansService.findOne(id);
    res.send(plan);
}));

//POST api/plans
router.post("/", [validator("Plan")], asyncWrapper(async (req, res) => {
    let plan = await plansService.create(req.body);
    res.send(plan);
}));

//DELETE api/plans
router.delete("/:id", asyncWrapper(async (req, res) => {
    let id = req.params.id;
    await plansService.deleteOne(id);
    res.sendStatus(200);
}));

module.exports = router;