import {
  BROWSE_VIDEO_PLAYLIST,
  LIKE_VIDEO_PLAYLIST_SUCCESS,
  LIKE_VIDEO_PLAYLIST_FAIL,
  UNLIKE_VIDEO_PLAYLIST_SUCCESS,
  UNLIKE_VIDEO_PLAYLIST_FAIL,
  FAVOURITE_VIDEO_PLAYLIST_SUCCESS,
  FAVOURITE_VIDEO_PLAYLIST_FAIL,
  VIEW_VIDEO_PLAYLIST,
  EDIT_VIDEO_PLAYLIST_SUCCESS,
  EDIT_VIDEO_PLAYLIST_FAIL,
} from "../../types/actionTypes";

const initialState = {
  browsePlaylist: [],
  viewPlaylist: [],
  loading: false,
  error: null,
};

const videoPlaylistReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_VIDEO_PLAYLIST:
      return {
        ...state,
        browsePlaylist: payload,
      };
    case LIKE_VIDEO_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_VIDEO_PLAYLIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case UNLIKE_VIDEO_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UNLIKE_VIDEO_PLAYLIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case FAVOURITE_VIDEO_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_VIDEO_PLAYLIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_VIDEO_PLAYLIST:
      return {
        ...state,
        viewPlaylist: payload,
      };
    case EDIT_VIDEO_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_VIDEO_PLAYLIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default videoPlaylistReducer;
