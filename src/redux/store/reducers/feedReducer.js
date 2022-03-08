import {
  ACTIVITY_SUCCESS,
  ACTIVITY_FAIL,
  SAVE_ACTIVITY_SUCCESS,
  SAVE_ACTIVITY_FAIL,
  UNHIDE_ACTIVITY_SUCCESS,
  UNHIDE_ACTIVITY_FAIL,
  UNSAVE_ACTIVITY_SUCCESS,
  UNSAVE_ACTIVITY_FAIL,
  HIDE_ACTIVITY_SUCCESS,
  HIDE_ACTIVITY_FAIL,
  ENABLE_FEED_SUCCESS,
  ENABLE_FEED_FAIL,
  DISABLE_FEED_SUCCESS,
  DISABLE_FEED_FAIL,
} from "../types/actionTypes";

const initialState = {
  loading: false,
  error: null,
};

const feedReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ACTIVITY_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case SAVE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_ACTIVITY_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case UNSAVE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UNSAVE_ACTIVITY_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case HIDE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case HIDE_ACTIVITY_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case UNHIDE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UNHIDE_ACTIVITY_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ENABLE_FEED_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ENABLE_FEED_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case DISABLE_FEED_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DISABLE_FEED_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default feedReducer;
