import {
  SENT_MESSAGE_SUCCESS,
  SENT_MESSAGE_FAIL,
  INBOX_MESSAGE,
  VIEW_MESSAGE,
  SET_MESSAGE,
} from "../types/actionTypes";

import MessageService from "../../services/messages-services";

export const inboxMessage = () => async (dispatch) => {
  try {
    const response = await MessageService.messageInbox();

    if (response) {
      dispatch({
        type: INBOX_MESSAGE,
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

export const messageView = () => async (dispatch) => {
  try {
    const response = await MessageService.messageView();

    if (response) {
      dispatch({
        type: VIEW_MESSAGE,
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

export const sentMessage = (data) => async (dispatch) => {
  try {
    const response = await MessageService.messageSent(data);

    if (response) {
      dispatch({
        type: SENT_MESSAGE_SUCCESS,
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
      type: SENT_MESSAGE_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
