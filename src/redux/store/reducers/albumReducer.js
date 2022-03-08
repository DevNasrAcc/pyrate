import {
  BROWSE_ALBUM,
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAIL,
  BROWSE_ALBUM_PHOTOS,
  ALBUM_CATEGORY,
  ALBUM_VIEW,
  MY_ALBUM,
  ALBUM_COMMENT,
} from "../types/actionTypes";

const initialState = {
  browseAlbum: [],
  albumPhotos: [],
  albumCategory: [],
  viewAlbum: [],
  myAlbum: [],
  albumComm: [],
  loading: false,
  error: null,
};

const albumReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ALBUM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ALBUM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case BROWSE_ALBUM:
      return {
        ...state,
        browseAlbum: payload,
      };
    case BROWSE_ALBUM_PHOTOS:
      return {
        ...state,
        albumPhotos: payload,
      };
    case ALBUM_CATEGORY:
      return {
        ...state,
        albumCategory: payload,
      };
    case ALBUM_VIEW:
      return {
        ...state,
        viewAlbum: payload,
      };
    case MY_ALBUM:
      return {
        ...state,
        myAlbum: payload,
      };
    case ALBUM_COMMENT:
      return {
        ...state,
        albumComm: payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
