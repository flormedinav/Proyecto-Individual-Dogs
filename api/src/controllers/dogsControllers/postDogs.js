const { Dog, Temperament } = require("../../db");

const postDogs = async (req, res) => {
  try {
    const {
      name,
      image,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      lifeSpanMin,
      lifeSpanMax,
      temperaments,
    } = req.body;

    if (
      !name ||
      !heightMin ||
      !heightMax ||
      !weightMin ||
      !weightMax ||
      !lifeSpanMin ||
      !lifeSpanMax ||
      !temperaments
    )
      throw new Error("Missing required data");

    const newDog = {
      name,
      image,
      heightMin: parseInt(heightMin),
      heightMax: parseInt(heightMax),
      weightMin: parseInt(weightMin),
      weightMax: parseInt(weightMax),
      lifeSpan: `${lifeSpanMin} - ${lifeSpanMax} years`,
    };

    const createNewDog = await Dog.create(newDog);

    const findTemp = await Temperament.findAll({
      where: { name: temperaments },
    });

    createNewDog.addTemperament(findTemp);

    return res.status(201).send("The dog was created successfully");
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postDogs;
