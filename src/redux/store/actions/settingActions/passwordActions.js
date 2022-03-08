import {
  PASSWORD_FORM_SUCCESS,
  PASSWORD_FORM_FAIL,
  SET_MESSAGE,
} from "../../types/actionTypes";

import SettingServices from "../../../services/setting-services";

export const passwordSetting =
  (password, confirm_password, token, oldPassword) => async (dispatch) => {
    try {
      const data = `password=${password}&submit=&passwordConfirm=${confirm_password}&auth_token=${token}&oldPassword=${oldPassword}`;

      const response = await SettingServices.passwordForm();

      if (response) {
        dispatch({
          type: PASSWORD_FORM_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: PASSWORD_FORM_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };
