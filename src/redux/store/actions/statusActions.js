import {
  VALIDATE_VIDEO_SUCCESS,
  VALIDATE_VIDEO_FAIL,
  POST_STATUS_SUCCESS,
  POST_STATUS_FAIL,
  SET_MESSAGE,
} from "../types/actionTypes";

import StatusService from "../../services/status-services";

export const videoUrlValidation = (data) => async (dispatch) => {
  try {
    const response = await StatusService.videoUrlValidation(data);

    if (response) {
      dispatch({
        type: VALIDATE_VIDEO_SUCCESS,
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
      type: VALIDATE_VIDEO_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const sentMessage = (data) => async (dispatch) => {
  try {
    const response = await StatusService.statusPost(data);

    if (response) {
      dispatch({
        type: POST_STATUS_SUCCESS,
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
      type: POST_STATUS_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
