const { Router } = require("express");
const getTemperament = require("../../controllers/temperamentsControllers/getTemperament");
const temperamentRouter = Router();

temperamentRouter.get("/", getTemperament);

module.exports = temperamentRouter;
