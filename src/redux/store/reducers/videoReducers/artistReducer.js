import {
  BROWSE_ARTIST_VIDEO,
  FAVOURITE_ARTIST_VIDEO_SUCCESS,
  FAVOURITE_ARTIST_VIDEO_FAIL,
  ARTIST_VIDEOS,
} from "../../types/actionTypes";

const initialState = {
  artist: [],
  artistVideos: [],
  loading: false,
  error: null,
};

const videoArtistReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_ARTIST_VIDEO:
      return {
        ...state,
        artist: payload,
      };
    case FAVOURITE_ARTIST_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_ARTIST_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ARTIST_VIDEOS:
      return {
        ...state,
        artistVideos: payload,
      };
    default:
      return state;
  }
};

export default videoArtistReducer;
