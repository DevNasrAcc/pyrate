import {
  PRIVACY_FORM_SUCCESS,
  PRIVACY_FORM_FAIL,
  SET_MESSAGE,
} from "../../types/actionTypes";

import SettingServices from "../../../services/setting-services";

export const privacySettings = (data) => async (dispatch) => {
  try {
    const response = await SettingServices.privacyForm(data);

    if (response) {
      dispatch({
        type: PRIVACY_FORM_SUCCESS,
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
      type: PRIVACY_FORM_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
