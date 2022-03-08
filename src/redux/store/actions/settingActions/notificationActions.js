import {
  NOTIFICATION_FORM_SUCCESS,
  NOTIFICATION_FORM_FAIL,
  SET_MESSAGE,
} from "../../types/actionTypes";

import SettingServices from "../../../services/setting-services";

export const notificationSettings = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

    const response = await SettingServices.notificationForm();

    if (response) {
      dispatch({
        type: NOTIFICATION_FORM_SUCCESS,
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
      type: NOTIFICATION_FORM_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
