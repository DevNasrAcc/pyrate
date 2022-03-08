import {
  CORE_SEARCH,
  FILTER_SEARCH_SUCCESS,
  FILTER_SEARCH_FAIL,
  SET_MESSAGE,
} from "../types/actionTypes";

import SearchServices from "../../services/search-services";

export const coreSearch = () => async (dispatch) => {
  try {
    const response = await SearchServices.coreSearch();

    if (response) {
      dispatch({
        type: CORE_SEARCH,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const filterSearch = (data) => async (dispatch) => {
  try {
    const response = await SearchServices.searchFilter(data);

    if (response) {
      dispatch({
        type: FILTER_SEARCH_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: FILTER_SEARCH_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
