import {
  VIEW_CHANNEL_VIDEO,
  CHANNEL_VIDEO_COMMENT_SUCCESS,
  CHANNEL_VIDEO_COMMENT_FAIL,
  CHANNEL_VIDEO_COMPOSER,
  CHANNEL_VIDEO_FEED,
  BROWSE_CHANNEL_VIDEO,
  RATE_CHANNEL_SUCCESS,
  RATE_CHANNEL_FAIL,
  CHANNEL_VIDEOS,
  CHANNEL_INFO,
  CHANNEL_PHOTOS,
  CHANNEL_COMMENT,
  EDIT_CHANNEL_SUCCESS,
  EDIT_CHANNEL_FAIL,
  FOLLOW_CHANNEL,
  LIKE_CHANNEL_SUCCESS,
  LIKE_CHANNEL_FAIL,
  UNLIKE_CHANNEL_SUCCESS,
  UNLIKE_CHANNEL_FAIL,
  FAVOURITE_CHANNEL_SUCCESS,
  FAVOURITE_CHANNEL_FAIL,
} from "../../types/actionTypes";

const initialState = {
  viewChannelVid: [],
  videoComposer: [],
  videoFeed: [],
  browseChannelVideos: [],
  channelVideos: [],
  channelInfo: [],
  channelPhotos: [],
  channelComment: [],
  followChannel: [],
  loading: false,
  error: null,
};

const videoChannelReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VIEW_CHANNEL_VIDEO:
      return {
        ...state,
        viewChannelVid: payload,
      };
    case CHANNEL_VIDEO_COMMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHANNEL_VIDEO_COMMENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case CHANNEL_VIDEO_COMPOSER:
      return {
        ...state,
        videoComposer: payload,
      };
    case CHANNEL_VIDEO_FEED:
      return {
        ...state,
        videoFeed: payload,
      };
    case BROWSE_CHANNEL_VIDEO:
      return {
        ...state,
        browseChannelVideos: payload,
      };
    case RATE_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RATE_CHANNEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case CHANNEL_VIDEOS:
      return {
        ...state,
        channelVideos: payload,
      };
    case CHANNEL_INFO:
      return {
        ...state,
        channelInfo: payload,
      };
    case CHANNEL_PHOTOS:
      return {
        ...state,
        channelPhotos: payload,
      };
    case CHANNEL_COMMENT:
      return {
        ...state,
        channelComment: payload,
      };
    case EDIT_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_CHANNEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case FOLLOW_CHANNEL:
      return {
        ...state,
        followChannel: payload,
      };
    case LIKE_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_CHANNEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case UNLIKE_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UNLIKE_CHANNEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case FAVOURITE_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_CHANNEL_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default videoChannelReducer;
