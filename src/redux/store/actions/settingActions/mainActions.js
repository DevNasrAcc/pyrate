import {
  GET_SETTINGS,
  SHOW_PRIVACY,
  SHOW_TERMS_CONDITIIONS,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  SET_MESSAGE,
} from "../../types/actionTypes";

import SettingServices from "../../../services/setting-services";

export const getSettingd = () => async (dispatch) => {
  try {
    const response = await SettingServices.getSettings();

    if (response) {
      dispatch({
        type: GET_SETTINGS,
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

export const showPrivacy = () => async (dispatch) => {
  try {
    const response = await SettingServices.showPrivacy();

    if (response) {
      dispatch({
        type: SHOW_PRIVACY,
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

export const showTermsConditions = () => async (dispatch) => {
  try {
    const response = await SettingServices.getTermsConditions();

    if (response) {
      dispatch({
        type: SHOW_TERMS_CONDITIIONS,
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

export const editProfileSettings = (data) => async (dispatch) => {
  try {
    const response = await SettingServices.editProfile();

    if (response) {
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
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
      type: EDIT_PROFILE_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
