import {
  CORE_SEARCH,
  FILTER_SEARCH_SUCCESS,
  FILTER_SEARCH_FAIL,
} from "../types/actionTypes";

const initialState = {
  loading: false,
  error: null,
  search: [],
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_SEARCH_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case FILTER_SEARCH_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case CORE_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
