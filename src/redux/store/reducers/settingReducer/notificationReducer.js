import {
  NOTIFICATION_FORM_SUCCESS,
  NOTIFICATION_FORM_FAIL,
} from "../../types/actionTypes";

const initialState = {
  loading: false,
  error: null,
};

const settingNotificationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTIFICATION_FORM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case NOTIFICATION_FORM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default settingNotificationReducer;
