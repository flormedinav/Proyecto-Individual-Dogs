const { Dog, Temperament } = require("../../db");
const { getDogsApi } = require("./getDogs");

const getDogsRace = async (req, res) => {
  try {
    const { idRace } = req.params;

    if (Number(idRace) >= 1 && Number(idRace) <= 264) {
      const dogsAllApi = await getDogsApi();

      const dogRaceApi = dogsAllApi.find((dog) => {
        return dog.id === parseInt(idRace);
      });

      if (!dogRaceApi) throw new Error("Not matches found");

      return res.status(200).json(dogRaceApi);
    } else {
      const dogsRaceDb = await Dog.findByPk(idRace, {
        include: {
          model: Temperament,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      if (!dogsRaceDb) throw new Error("Not matches found");

      return res.status(200).json(dogsRaceDb);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getDogsRace;
