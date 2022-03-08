import {
  FRIEND_REQUEST_SUCCESS,
  FRIEND_REQUEST_FAIL,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAIL,
  IGNORE_FRIEND_SUCCESS,
  IGNORE_FRIEND_FAIL,
  MEMBER_VIEW,
  PROFILE_INFO,
  USER_FRIEND,
  USER_ALBUM,
  USER_BLOG,
  USER_VIDEO,
  USER_MUSIC,
} from "../types/actionTypes";

const initialState = {
  viewMember: [],
  profileInfo: [],
  userFriend: [],
  userAlbum: [],
  userBlog: [],
  userVideo: [],
  userMusic: [],
  loading: false,
  error: null,
};

const memberReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FRIEND_REQUEST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_FRIEND_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case IGNORE_FRIEND_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case IGNORE_FRIEND_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case MEMBER_VIEW:
      return {
        ...state,
        viewMember: payload,
      };
    case PROFILE_INFO:
      return {
        ...state,
        profileInfo: payload,
      };
    case USER_FRIEND:
      return {
        ...state,
        userFriend: payload,
      };
    case USER_ALBUM:
      return {
        ...state,
        userAlbum: payload,
      };
    case USER_BLOG:
      return {
        ...state,
        userBlog: payload,
      };
    case USER_VIDEO:
      return {
        ...state,
        userVideo: payload,
      };
    case USER_MUSIC:
      return {
        ...state,
        userMusic: payload,
      };
    default:
      return state;
  }
};

export default memberReducer;
