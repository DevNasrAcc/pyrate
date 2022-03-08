import {
  BROWSE_SONGS,
  SONGS_COMMENT_SUCCESS,
  SONGS_COMMENT_FAIL,
  LIKE_SONGS_SUCCESS,
  LIKE_SONGS_FAIL,
  FAVOURITE_SONGS_SUCCESS,
  FAVOURITE_SONGS_FAIL,
  ALL_SONGS_COMMENT,
  ADD_TO_PLAYLIST_SONGS_SUCCESS,
  ADD_TO_PLAYLIST_SONGS_FAIL,
  SONGS_LYRICS,
} from "../../types/actionTypes";

const initialState = {
  browseSongs: [],
  songsComment: [],
  lyrics: [],
  loading: false,
  error: null,
};

const musicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_SONGS:
      return {
        ...state,
        browseSongs: payload,
      };
    case SONGS_COMMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SONGS_COMMENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case LIKE_SONGS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_SONGS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case FAVOURITE_SONGS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_SONGS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ADD_TO_PLAYLIST_SONGS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TO_PLAYLIST_SONGS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ALL_SONGS_COMMENT:
      return {
        ...state,
        songsComment: payload,
      };
    case SONGS_LYRICS:
      return {
        ...state,
        lyrics: payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
