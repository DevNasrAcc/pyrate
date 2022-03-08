import {
  MY_VIDEOS,
  MY_CHANNEL_VIDEOS,
  MY_CHANNEL_PLAYLISTS,
  VIDEOS_SELECTED_CATEGORY,
  VIDEO_CATEGORY,
} from "../../types/actionTypes";

const initialState = {
  myVideos: [],
  myChannelVideos: [],
  myChannelPlaylist: [],
  selectedCategory: [],
  category: [],
};

const manageVideoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MY_VIDEOS:
      return {
        ...state,
        myVideos: payload,
      };
    case MY_CHANNEL_VIDEOS:
      return {
        ...state,
        myChannelVideos: payload,
      };
    case MY_CHANNEL_PLAYLISTS:
      return {
        ...state,
        myChannelPlaylist: payload,
      };
    case VIDEOS_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: payload,
      };
    case VIDEO_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};

export default manageVideoReducer;
