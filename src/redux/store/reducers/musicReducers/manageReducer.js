import { MY_MUSIC_ALBUMS, MY_MUSIC_PLAYLISTS } from "../../types/actionTypes";

const initialState = {
  myMusic: [],
  myPlaylist: [],
  loading: false,
  error: null,
};

const manageMusicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MY_MUSIC_ALBUMS:
      return {
        ...state,
        myMusic: payload,
      };
    case MY_MUSIC_PLAYLISTS:
      return {
        ...state,
        myPlaylist: payload,
      };
    default:
      return state;
  }
};

export default manageMusicReducer;
