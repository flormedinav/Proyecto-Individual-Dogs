require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Dog, Temperament } = require("../../db");
// const dogsName = require("../dogsFilterOrder/dogsName");
const dogsAllFilterOrder = require("../../helpers/dogsFilterOrder/dogsAllFilterOrder");
const dogsPaginado = require("../../helpers/dogsPaginado/dogsPaginado");

const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getDogsApi = async () => {
  const response = await axios(URL);

  const data = response.data;

  const dogsApi = data.map((dog) => {
    const temperamentsArray = dog.temperament?.split(", ");
    const temperamentsObject = temperamentsArray?.map((temp) => ({
      name: temp,
    }));

    return {
      id: dog.id,
      name: dog.name,
      lifeSpan: dog.life_span,
      temperaments: temperamentsObject,
      image: dog.image.url,
      heightMin: parseInt(dog.height.metric.split(" - ")[0]),
      heightMax: parseInt(dog.height.metric.split(" - ")[1]),
      weightMin: parseInt(dog.weight.metric.split(" - ")[0]),
      weightMax: parseInt(dog.weight.metric.split(" - ")[1]),
    };
  });

  return dogsApi;
};

const getDogsBd = async () => {
  const dogsDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  return dogsDb;
};

const getDogsAll = async () => {
  const dogsApiInfo = await getDogsApi();
  const dogsBdInfo = await getDogsBd();

  const dogsAll = [...dogsApiInfo, ...dogsBdInfo];

  return dogsAll;
};

const getDogs = async (req, res) => {
  try {
    const { name, temperament, filter, order, page } = req.query;

    const dogsAll = await getDogsAll();

    //Si no tengo ningun filtro u ordenamiento devuelvo todo
    if (!name && !temperament && !filter && !order) {
      const dogsAllPaginado = dogsPaginado(page, dogsAll);

      return res.status(200).json(dogsAllPaginado);
    }

    //Si tengo name trabajo desde ese array filtrado con los filtros
    if (name) {
      const dogsNameAll = dogsAll.filter((dog) => {
        return dog.name.toLowerCase().includes(name.toLowerCase());
      });

      //Si solamente tengo un name, devuelvo el array filtrado
      if (!temperament && !filter && !order) {
        const dogsNamePaginado = dogsPaginado(page, dogsNameAll);

        return res.status(200).json(dogsNamePaginado);
      }

      //Si tengo name y cualquiera: temperament, filter y order pasa a ser trabajado por dogsAllFilterOrder
      const dogName = dogsAllFilterOrder(
        { temperament, filter, order },
        dogsNameAll
      );

      //Aqui hacemos el paginado
      const dogsNamePagina = dogsPaginado(page, dogName);

      if (dogsNamePagina.info.length === 0) {
        throw new Error("No matches");
      }

      return res.status(200).json(dogsNamePagina);
    }

    if (!name || temperament || filter || order) {
      const dogsFilterOrder = dogsAllFilterOrder(
        { temperament, filter, order },
        dogsAll
      );

      const dogsFilterOrderPaginado = dogsPaginado(page, dogsFilterOrder);

      res.status(200).json(dogsFilterOrderPaginado);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getDogsAll, getDogsApi, getDogsBd, getDogs };
