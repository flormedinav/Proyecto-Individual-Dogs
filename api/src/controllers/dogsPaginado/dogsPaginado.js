const dogsPaginado = (page = 1, array) => {
  const dogsForPage = 8; //8 perros por página

  let amountDogs = array.length;

  let amountPages = Math.ceil(amountDogs / dogsForPage);

  if (array.length < 8) {
    return {
      info: array,
      amountPages,
    };
  }

  const startIndex = (page - 1) * 8;
  const endIndex = Math.min(startIndex + dogsForPage, amountDogs);

  const arrayPaginado = array.slice(startIndex, endIndex);

  return {
    info: arrayPaginado,
    amountPages,
  };
};

module.exports = dogsPaginado;
