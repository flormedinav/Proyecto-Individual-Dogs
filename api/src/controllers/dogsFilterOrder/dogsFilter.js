const dogsFilter = (array, filter) => {
  if (filter === "createdInDb") {
    const dogsCreateDb = array.filter((dog) => dog.createdInDb);
    return dogsCreateDb;
  }

  if (filter === "originApi") {
    const dogsOriginApi = array.filter((dog) => !dog.createdInDb);
    return dogsOriginApi;
  }
};

module.exports = dogsFilter;
