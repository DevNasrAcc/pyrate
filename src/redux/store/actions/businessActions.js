import {
  BROWSE_BUSINESS,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_FAIL,
  DELETE_BUSINESS,
  BUSINESS_MENU,
  FAVOURITE_BUSINESSS_SUCCESS,
  FAVOURITE_BUSINESSS_FAIL,
  VIEW_BUSINESS,
  CATEGORIES_BUSINESSS,
  EDIT_BUSINESS_SUCCESS,
  EDIT_BUSINESS_FAIL,
  BUSINESS_INFORMATION,
  BUSINESS_MEMBER,
  LIKE_BUSINESS_SUCCESS,
  LIKE_BUSINESS_FAIL,
  BUSINESS_FOLLOW_SUCCESS,
  BUSINESS_FOLLOW_FAIL,
  SET_MESSAGE,
} from "../types/actionTypes";

import BusinessServices from "../../services/business-services";

export const browseBusiness = () => async (dispatch) => {
  try {
    const response = await BusinessServices.browseBusiness();

    if (response) {
      dispatch({
        type: BROWSE_BUSINESS,
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

export const businessCreate = (data) => async (dispatch) => {
  try {
    const response = await BusinessServices.createBusiness(data);

    if (response) {
      dispatch({
        type: CREATE_BUSINESS_SUCCESS,
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
      type: CREATE_BUSINESS_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const businessDelete = (id) => async (dispatch) => {
  try {
    const response = await BusinessServices.deleteBusiness(id);

    if (response) {
      dispatch({
        type: DELETE_BUSINESS,
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

export const menu = () => async (dispatch) => {
  try {
    const response = await BusinessServices.menu();

    if (response) {
      dispatch({
        type: BUSINESS_MENU,
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

export const favouriteBusiness = (data) => async (dispatch) => {
  try {
    const response = await BusinessServices.favouriteBusiness(data);

    if (response) {
      dispatch({
        type: FAVOURITE_BUSINESSS_SUCCESS,
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
      type: FAVOURITE_BUSINESSS_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const viewBusiness = () => async (dispatch) => {
  try {
    const response = await BusinessServices.viewBusiness();

    if (response) {
      dispatch({
        type: VIEW_BUSINESS,
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

export const businessCategory = () => async (dispatch) => {
  try {
    const response = await BusinessServices.businessCategory();

    if (response) {
      dispatch({
        type: CATEGORIES_BUSINESSS,
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

export const editBusiness = (data) => async (dispatch) => {
  try {
    const response = await BusinessServices.editBusiness(data);

    if (response) {
      dispatch({
        type: EDIT_BUSINESS_SUCCESS,
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
      type: EDIT_BUSINESS_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const businessInformation = () => async (dispatch) => {
  try {
    const response = await BusinessServices.businessInformation();

    if (response) {
      dispatch({
        type: BUSINESS_INFORMATION,
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

export const likeBusiness = (id, type) => async (dispatch) => {
  try {
    const response = await BusinessServices.likeBusiness(id, type);

    if (response) {
      dispatch({
        type: LIKE_BUSINESS_SUCCESS,
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
      type: LIKE_BUSINESS_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const businessMember = () => async (dispatch) => {
  try {
    const response = await BusinessServices.businessMember();

    if (response) {
      dispatch({
        type: BUSINESS_MEMBER,
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

export const followBusiness = (id, type) => async (dispatch) => {
  try {
    const response = await BusinessServices.followBusiness(id, type);

    if (response) {
      dispatch({
        type: BUSINESS_FOLLOW_SUCCESS,
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
      type: BUSINESS_FOLLOW_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
