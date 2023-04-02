const { Router } = require("express");
const { getDogs } = require("../../controllers/dogsControllers/getDogs");
const postDogs = require("../../controllers/dogsControllers/postDogs");
const getDogsRace = require("../../controllers/dogsControllers/getDogsRace");

const dogsRouter = Router();

dogsRouter.get("/", getDogs);
dogsRouter.get("/:idRace", getDogsRace);
dogsRouter.post("/", postDogs);

module.exports = dogsRouter;
