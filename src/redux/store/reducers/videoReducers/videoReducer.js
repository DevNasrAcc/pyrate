import {
  BROWSE_VIDEO,
  VIDEO_COMMENT_SUCCESS,
  VIDEO_COMMENT_FAIL,
  VIEW_VIDEO,
  LIKE_VIDEO_SUCCESS,
  LIKE_VIDEO_FAIL,
  UNLIKE_VIDEO_SUCCESS,
  UNLIKE_VIDEO_FAIL,
  FAVOURITE_VIDEO_SUCCESS,
  FAVOURITE_VIDEO_FAIL,
  WATCH_VIDEO_LATER_SUCCESS,
  WATCH_VIDEO_LATER_FAIL,
  ADD_TO_PLAYLIST_VIDEO_SUCCESS,
  ADD_TO_PLAYLIST_VIDEO_FAIL,
  EDIT_VIDEO_SUCCESS,
  EDIT_VIDEO_FAIL,
  CREATE_VIDEO_SUCCESS,
  CREATE_VIDEO_FAIL,
} from "../../types/actionTypes";

const initialState = {
  videos: [],
  viewVideos: [],
  loading: false,
  error: null,
};

const musicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_VIDEO:
      return {
        ...state,
        videos: payload,
      };
    case VIDEO_COMMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VIDEO_COMMENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_VIDEO:
      return {
        ...state,
        viewVideos: payload,
      };
    case LIKE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case UNLIKE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UNLIKE_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case FAVOURITE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case WATCH_VIDEO_LATER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case WATCH_VIDEO_LATER_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ADD_TO_PLAYLIST_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TO_PLAYLIST_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case EDIT_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case CREATE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
