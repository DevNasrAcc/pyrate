import {
  BROWSE_ARTIST_MUSIC,
  VIEW_ARTIST_MUSIC,
} from "../../types/actionTypes";

const initialState = {
  artist: [],
  viewArtist: [],
};

const artistMusicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_ARTIST_MUSIC:
      return {
        ...state,
        artist: payload,
      };
    case VIEW_ARTIST_MUSIC:
      return {
        ...state,
        viewArtist: payload,
      };
    default:
      return state;
  }
};

export default artistMusicReducer;
