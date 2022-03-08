import {
  VALIDATE_VIDEO_SUCCESS,
  VALIDATE_VIDEO_FAIL,
  POST_STATUS_SUCCESS,
  POST_STATUS_FAIL,
} from "../types/actionTypes";

const initialState = {
  loading: false,
  error: null,
};

const statusReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VALIDATE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VALIDATE_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case POST_STATUS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_STATUS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default statusReducer;
