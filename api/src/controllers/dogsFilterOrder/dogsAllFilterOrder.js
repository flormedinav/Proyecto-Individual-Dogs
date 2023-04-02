const dogsFilter = require("./dogsFilter");
const dogsOrder = require("./dogsOrder");
const dogsFilterTemperaments = require("./dogsFilterTemperaments");

const dogsAllFilterOrder = ({ temperament, filter, order }, dogsAll) => {
  //Filtrado según si es de la api o DB
  if (filter && !order && !temperament) {
    const dogsAllFilter = dogsFilter(dogsAll, filter);

    return dogsAllFilter;
  }

  //Ordenamiento
  if (!filter && order && !temperament) {
    const dogsAlOrder = dogsOrder(dogsAll, order);

    return dogsAlOrder;
  }

  //Filtro y ordenamiento combinado
  if (filter && order && !temperament) {
    const dogsAllFilter = dogsFilter(dogsAll, filter);
    const dogsFilterOrder = dogsOrder(dogsAllFilter, order);

    return dogsFilterOrder;
  }

  if (!filter && !order && temperament) {
    const dogsTemperament = dogsFilterTemperaments(dogsAll, temperament);

    return dogsTemperament;
  }

  if (filter && !order && temperament) {
    const dogsAllFilter = dogsFilter(dogsAll, filter);
    const dogsTemperament = dogsFilterTemperaments(dogsAllFilter, temperament);

    console.log("aaaaaaa", dogsTemperament);
    return dogsTemperament;
  }

  if (filter && order && temperament) {
    const dogsAllFilter = dogsFilter(dogsAll, filter);
    const dogsFilterOrder = dogsOrder(dogsAllFilter, order);
    const dogsTemperamet = dogsFilterTemperaments(dogsFilterOrder, temperament);

    return dogsTemperamet;
  }
};

module.exports = dogsAllFilterOrder;
