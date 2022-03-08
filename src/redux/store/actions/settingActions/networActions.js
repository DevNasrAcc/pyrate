import {
  ALL_JOINED_NETWORK,
  AVAILABLE_NETWORK,
  LEAVE_NETWORK,
  JOIN_NETWORK_SUCCESS,
  JOIN_NETWORK_FAIL,
  SET_MESSAGE,
} from "../../types/actionTypes";

import SettingServices from "../../../services/setting-services";

export const joinNetwork = () => async (dispatch) => {
  try {
    const response = await SettingServices.joinNetwork();

    if (response) {
      dispatch({
        type: ALL_JOINED_NETWORK,
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

export const availableNetwork = () => async (dispatch) => {
  try {
    const response = await SettingServices.availableNetwork();

    if (response) {
      dispatch({
        type: AVAILABLE_NETWORK,
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

export const joinNewNetwork = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

    const response = await SettingServices.joinNewNetwork();

    if (response) {
      dispatch({
        type: JOIN_NETWORK_SUCCESS,
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
      type: JOIN_NETWORK_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
