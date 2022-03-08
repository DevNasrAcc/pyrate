import {
  SENT_MESSAGE_SUCCESS,
  SENT_MESSAGE_FAIL,
  INBOX_MESSAGE,
  VIEW_MESSAGE,
} from "../types/actionTypes";

const initialState = {
  inbox: [],
  viewMessage: [],
  loading: false,
  error: null,
};

const messagesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SENT_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SENT_MESSAGE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case INBOX_MESSAGE:
      return {
        ...state,
        inbox: payload,
      };
    case VIEW_MESSAGE:
      return {
        ...state,
        viewMessage: payload,
      };
    default:
      return state;
  }
};

export default messagesReducer;
