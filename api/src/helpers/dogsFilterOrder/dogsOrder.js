const dogsOrder = (array, order) => {
  if (order === "weightMin") {
    const orderWeightMin = array.sort((a, b) => {
      if (a.weightMin > b.weightMin) return 1;
      if (a.weightMin < b.weightMin) return -1;
      return 0;
    });

    return orderWeightMin;
  }

  if (order === "weightMax") {
    const orderWeightMax = array.sort((a, b) => {
      if (a.weightMax > b.weightMax) return -1;
      if (a.weightMax < b.weightMax) return 1;
      return 0;
    });

    return orderWeightMax;
  }

  if (order === "upward") {
    const upward = array.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA > nameB) return 1;
      if (nameA < nameB) return -1;
      return 0;
    });

    return upward;
  }

  if (order === "descendant") {
    const descendant = array.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    });
    return descendant;
  }
};

module.exports = dogsOrder;
