import {
  BROWSE_EVENT,
  MY_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
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
} from "../types/actionTypes";

const initialState = {
  browseEvent: [],
  myEvent: [],
  menu: [],
  eventCateg: [],
  viewEvent: [],
  eventInfo: [],
  loading: false,
  error: null,
};

const eventReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_EVENT:
      return {
        ...state,
        browseEvent: payload,
      };
    case MY_EVENT:
      return {
        ...state,
        myEvent: payload,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_EVENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case EVENT_MENU:
      return {
        ...state,
        menu: payload,
      };
    case CATEGORIES_EVENTS:
      return {
        ...state,
        eventCateg: payload,
      };
    case FAVOURITE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_EVENTS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_EVENT:
      return {
        ...state,
        viewEvent: payload,
      };
    case EVENT_INFORMATION:
      return {
        ...state,
        eventInfo: payload,
      };
    case LEAVE_EVENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LEAVE_EVENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case EDIT_EVENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_EVENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
