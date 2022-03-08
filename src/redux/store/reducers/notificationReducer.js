import {
  NOTIFICATION_LIST,
  MARK_NOTIFICATION_SUCCESS,
  MARK_NOTIFICATION_FAIL,
} from "../types/actionTypes";

const initialState = {
  notificationList: [],
  loading: false,
  error: null,
};

const notificationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTIFICATION_LIST:
      return {
        ...state,
        notificationList: payload,
      };
    case MARK_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MARK_NOTIFICATION_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default notificationReducer;
