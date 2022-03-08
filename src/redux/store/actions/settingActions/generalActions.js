import {
  GENERAL_FORM_SUCCESS,
  GENERAL_FORM_FAIL,
  SET_MESSAGE
} from "../../types/actionTypes";

import SettingService from "../../../services/setting-services";

export const generalSettings = () => (dispatch) => {
    return SettingService.postGeneralSetting().then(
        (data) => {
          dispatch({
            type: GENERAL_FORM_SUCCESS,
            payload: data,
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();

          dispatch({
            type: GENERAL_FORM_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        }
    );
};
