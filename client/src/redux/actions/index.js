import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_DETAIL_DOGS,
  CLEAR_DETAIL_DOGS,
  LOADING_PAGE,
  PAGE_PAGINADO,
  // ON_SEARCH,
  NAME_SEARCH,
  FILTER_SELECT,
  ORDER_SELECT,
  TEMPERAMENTS_SELECT,
  GET_TEMPERAMENTS,
  POST_DOGS,
  // CREATE_IMAGE,
} from "./actions-type";

export const getAllDogs = (name, temperament, page, filter, order) => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3001/dogs", {
        params: { name, temperament, page, filter, order },
      });

      const data = response.data;

      return dispatch({
        type: GET_ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailDogs = (idRace) => {
  return async (dispatch) => {
    try {
      //Aquí estoy haciendo el pedido al back para que me traiga el perro del id correspondiente.
      const response = await axios(`http://localhost:3001/dogs/${idRace}`);

      const data = response.data;
      return dispatch({
        type: GET_DETAIL_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetailDogs = () => {
  return {
    type: CLEAR_DETAIL_DOGS,
    payload: {},
  };
};

export const loadingPage = (boolean) => {
  return {
    type: LOADING_PAGE,
    payload: boolean,
  };
};

export const pagePaginado = (page) => {
  return {
    type: PAGE_PAGINADO,
    payload: page,
  };
};

// export const onSeach = (name) => {
//   return async (dispatch) => {
//     const response = await axios("http://localhost:3001/dogs", {
//       params: { name },
//     });

//     const data = response.data;
//     console.log("data search", data);
//     return dispatch({
//       type: ON_SEARCH,
//       payload: data,
//     });
//   };
// };

export const filterSelect = (filter) => {
  return { type: FILTER_SELECT, payload: filter };
};

export const orderSelect = (order) => {
  return { type: ORDER_SELECT, payload: order };
};

export const temperamentsSelect = (temperament) => {
  return { type: TEMPERAMENTS_SELECT, payload: temperament };
};

export const nameSearch = (name) => {
  return {
    type: NAME_SEARCH,
    payload: name,
  };
};

export const getTemperament = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3001/temperaments");
      const data = response.data;

      const dataOrder = data.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA > nameB) return 1;
        if (nameA < nameB) return -1;
        return 0;
      });

      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: dataOrder,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postDogs = (createDog) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/dogs", createDog);
    return dispatch({
      type: POST_DOGS,
    });
  };
};

export const getCreateImage = () => {
  return async (dispatch) => {
    const response = await axios("https://api.thedogapi.com/v1/images/search");

    const data = response.data;
    const image = data[0].url;

    // return dispatch({
    //   type: CREATE_IMAGE,
    //   payload: image,
    // });
    return image;
  };
};
