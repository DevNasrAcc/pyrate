import {
  NOTIFICATION_LIST,
  MARK_NOTIFICATION_SUCCESS,
  MARK_NOTIFICATION_FAIL,
  SET_MESSAGE,
} from "../types/actionTypes";

import NotificationService from "../../services/notification-services";

export const notificationList = () => async (dispatch) => {
  try {
    const response = await NotificationService.listNotifications();

    if (response) {
      dispatch({
        type: NOTIFICATION_LIST,
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

export const readNotification = (data) => async (dispatch) => {
  try {
    const response = await NotificationService.notificationRead(data);

    if (response) {
      dispatch({
        type: MARK_NOTIFICATION_SUCCESS,
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
      type: MARK_NOTIFICATION_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
