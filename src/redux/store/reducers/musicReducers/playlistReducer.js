import {
  BROWSE_MUSIC_PLAYLIST,
  VIEW_MUSIC_PLAYLIST,
  FAVOURITE_MUSIC_PLAYLIST_SUCCESS,
  FAVOURITE_MUSIC_PLAYLIST_FAIL,
  EDIT_MUSIC_PLAYLIST_SUCCESS,
  EDIT_MUSIC_PLAYLIST_FAIL,
} from "../../types/actionTypes";

const initialState = {
  musicPlaylist: [],
  viewPlaylist: [],
  loading: false,
  error: null,
};

const playlistMusicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_MUSIC_PLAYLIST:
      return {
        ...state,
        musicPlaylist: payload,
      };
    case FAVOURITE_MUSIC_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_MUSIC_PLAYLIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case EDIT_MUSIC_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_MUSIC_PLAYLIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_MUSIC_PLAYLIST:
      return {
        ...state,
        viewPlaylist: payload,
      };
    default:
      return state;
  }
};

export default playlistMusicReducer;
