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
  GET_TEMPERAMENTS,
  POST_DOGS,
  CREATE_IMAGE,
  TEMPERAMENTS_SELECT,
} from "../actions/actions-type";

const initialState = {
  allDogs: [],
  amountPages: 0,
  dogsDetail: {},
  loading: false,
  page: "1",
  filter: null,
  order: null,
  name: null,
  temperaments: [],
  temperament: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload.info,
        amountPages: action.payload.amountPages,
      };

    case GET_DETAIL_DOGS:
      return {
        ...state,
        dogsDetail: action.payload,
      };

    case CLEAR_DETAIL_DOGS:
      return {
        ...state,
        dogsDetail: action.payload,
      };

    case LOADING_PAGE:
      return {
        ...state,
        loading: action.payload,
      };

    case PAGE_PAGINADO:
      return {
        ...state,
        page: action.payload,
      };

    // case ON_SEARCH:
    //   return {
    //     ...state,
    //     allDogs: action.payload.info,
    //     amountPages: action.payload.amountPages,
    //   };

    case NAME_SEARCH:
      return {
        ...state,
        name: action.payload,
      };

    case FILTER_SELECT:
      return {
        ...state,
        filter: action.payload,
      };

    case ORDER_SELECT:
      return {
        ...state,
        order: action.payload,
      };

    case TEMPERAMENTS_SELECT:
      return {
        ...state,
        temperament: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case POST_DOGS:
      return {
        ...state,
      };

    case CREATE_IMAGE:
      return {
        ...state,
        imageDogsRamdom: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
