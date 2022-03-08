import {
  BROWSE_EVENT,
  MY_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  DELETE_EVENT,
  EVENT_MENU,
  CATEGORIES_EVENTS,
  FAVOURITE_EVENTS_SUCCESS,
  FAVOURITE_EVENTS_FAIL,
  VIEW_EVENT,
  EVENT_INFORMATION,
  LEAVE_EVENT_SUCCESS,
  LEAVE_EVENT_FAIL,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAIL,
  SET_MESSAGE,
} from "../types/actionTypes";

import EventServices from "../../services/event-services";

export const browseEvent = () => async (dispatch) => {
  try {
    const response = await EventServices.browseEvent();

    if (response) {
      dispatch({
        type: BROWSE_EVENT,
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

export const myEvent = () => async (dispatch) => {
  try {
    const response = await EventServices.myEvent();

    if (response) {
      dispatch({
        type: MY_EVENT,
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

export const eventCreate = (data) => async (dispatch) => {
  try {
    const response = await EventServices.createEvent(data);

    if (response) {
      dispatch({
        type: CREATE_EVENT_SUCCESS,
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
      type: CREATE_EVENT_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const eventDelete = (id) => async (dispatch) => {
  try {
    const response = await EventServices.deleteEvent(id);

    if (response) {
      dispatch({
        type: DELETE_EVENT,
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
    const response = await EventServices.menu();

    if (response) {
      dispatch({
        type: EVENT_MENU,
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

export const eventCategory = () => async (dispatch) => {
  try {
    const response = await EventServices.eventCategory();

    if (response) {
      dispatch({
        type: CATEGORIES_EVENTS,
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

export const favouriteEvent = (id, type) => async (dispatch) => {
  try {
    const response = await EventServices.favouriteEvent(id, type);

    if (response) {
      dispatch({
        type: FAVOURITE_EVENTS_SUCCESS,
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
      type: FAVOURITE_EVENTS_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const viewEvent = () => async (dispatch) => {
  try {
    const response = await EventServices.viewEvent();

    if (response) {
      dispatch({
        type: VIEW_EVENT,
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

export const eventInformation = () => async (dispatch) => {
  try {
    const response = await EventServices.eventInformation();

    if (response) {
      dispatch({
        type: EVENT_INFORMATION,
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

export const leaveEvent = (id) => async (dispatch) => {
  try {
    const response = await EventServices.leaveEvent(id);

    if (response) {
      dispatch({
        type: LEAVE_EVENT_SUCCESS,
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
      type: LEAVE_EVENT_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const editEvent = (data) => async (dispatch) => {
  try {
    const response = await EventServices.editEvent(data);

    if (response) {
      dispatch({
        type: EDIT_EVENT_SUCCESS,
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
      type: EDIT_EVENT_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
