const dogsFilterTemperaments = (array, temperament) => {
  const dogsTemperament = array.filter((dog) =>
    dog.temperaments?.some((temp) => temp.name === temperament)
  );
  return dogsTemperament;
};

module.exports = dogsFilterTemperaments;
