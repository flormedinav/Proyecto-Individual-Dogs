const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../../db");

const URL = `https://api.thedogapi.com/v1/breeds?key=${API_KEY}`;

const getTemperament = async (req, res) => {
  try {
    const infoApi = await axios.get(URL);

    const temperamentDogs = await infoApi.data.map((dog) => dog.temperament);

    for (let i = 0; i < temperamentDogs.length; i++) {
      const temperament = String(temperamentDogs[i]).split(", ");

      for (let j = 0; j < temperament.length; j++) {
        await Temperament.findOrCreate({
          where: { name: temperament[j] },
        });
      }
    }

    const temperamentAll = await Temperament.findAll();

    return res.status(200).send(temperamentAll);
  } catch (error) {
    return res.status(500).send("Error loading to database");
  }
};

module.exports = getTemperament;