import {
  BROWSE_MUSIC_ALBUM,
  RATE_MUSIC_ALBUM_SUCCESS,
  RATE_MUSIC_ALBUM_FAIL,
  LIKE_MUSIC_ALBUM_SUCCESS,
  LIKE_MUSIC_ALBUM_FAIL,
  FAVOURITE_MUSIC_ALBUM_SUCCESS,
  FAVOURITE_MUSIC_ALBUM_FAIL,
  ADD_TO_PLAYLIST_MUSIC_SUCCESS,
  ADD_TO_PLAYLIST_MUSIC_FAIL,
  VIEW_MUSIC_ALBUM,
  MUSIC_ALBUM_COMMENT,
} from "../../types/actionTypes";

const initialState = {
  musicAlbum: [],
  viewAlbum: [],
  albumComment: [],
  loading: false,
  error: null,
};

const albumMusicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_MUSIC_ALBUM:
      return {
        ...state,
        data: payload,
      };
    case RATE_MUSIC_ALBUM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RATE_MUSIC_ALBUM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case LIKE_MUSIC_ALBUM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_MUSIC_ALBUM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case FAVOURITE_MUSIC_ALBUM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_MUSIC_ALBUM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ADD_TO_PLAYLIST_MUSIC_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TO_PLAYLIST_MUSIC_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_MUSIC_ALBUM:
      return {
        ...state,
        viewAlbum: payload,
      };
    case MUSIC_ALBUM_COMMENT:
      return {
        ...state,
        albumComment: payload,
      };

    default:
      return state;
  }
};

export default albumMusicReducer;
