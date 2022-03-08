import {
  FRIEND_REQUEST_SUCCESS,
  FRIEND_REQUEST_FAIL,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAIL,
  IGNORE_FRIEND_SUCCESS,
  IGNORE_FRIEND_FAIL,
  MEMBER_VIEW,
  PROFILE_INFO,
  BROWSE_MEMBER,
  USER_FRIEND,
  USER_ALBUM,
  USER_BLOG,
  USER_VIDEO,
  USER_MUSIC,
  SET_MESSAGE,
} from "../types/actionTypes";

import MemberServices from "../../services/member-services";

export const friendRequest = () => async (dispatch) => {
  try {
    const response = await MemberServices.friendRequest();

    if (response) {
      dispatch({
        type: FRIEND_REQUEST_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: FRIEND_REQUEST_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const addFriend = () => async (dispatch) => {
  try {
    const response = await MemberServices.addFriend();

    if (response) {
      dispatch({
        type: ADD_FRIEND_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: ADD_FRIEND_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const ignoreFriendRequest = () => async (dispatch) => {
  try {
    const response = await MemberServices.ignoreFriendRequest();

    if (response) {
      dispatch({
        type: IGNORE_FRIEND_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: IGNORE_FRIEND_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const memberView = () => async (dispatch) => {
  try {
    const response = await MemberServices.memberView();

    if (response) {
      dispatch({
        type: MEMBER_VIEW,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const memberBrowse = () => async (dispatch) => {
  try {
    const response = await MemberServices.memberBrowse();

    if (response) {
      dispatch({
        type: BROWSE_MEMBER,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const searchAlbum = () => async (dispatch) => {
  try {
    const response = await MemberServices.albumSearch();

    if (response) {
      dispatch({
        type: SEARCH_ALBUM,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProfileInform = () => async (dispatch) => {
  try {
    const response = await MemberServices.getProfileInfo();

    if (response) {
      dispatch({
        type: PROFILE_INFO,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserFriend = () => async (dispatch) => {
  try {
    const response = await MemberServices.getUserFriend();

    if (response) {
      dispatch({
        type: USER_FRIEND,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserAlbum = () => async (dispatch) => {
  try {
    const response = await MemberServices.getUserAlbum();

    if (response) {
      dispatch({
        type: USER_ALBUM,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserBlog = () => async (dispatch) => {
  try {
    const response = await MemberServices.getUserBlog();

    if (response) {
      dispatch({
        type: USER_BLOG,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserMusic = () => async (dispatch) => {
  try {
    const response = await MemberServices.getUserMusic();

    if (response) {
      dispatch({
        type: USER_MUSIC,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserVideo = () => async (dispatch) => {
  try {
    const response = await MemberServices.getUserVideo();

    if (response) {
      dispatch({
        type: USER_VIDEO,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
