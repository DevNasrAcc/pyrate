import {
  BROWSE_VIDEO_PLAYLIST,
  LIKE_VIDEO_PLAYLIST_SUCCESS,
  LIKE_VIDEO_PLAYLIST_FAIL,
  UNLIKE_VIDEO_PLAYLIST_SUCCESS,
  UNLIKE_VIDEO_PLAYLIST_FAIL,
  FAVOURITE_VIDEO_PLAYLIST_SUCCESS,
  FAVOURITE_VIDEO_PLAYLIST_FAIL,
  VIEW_VIDEO_PLAYLIST,
  EDIT_VIDEO_PLAYLIST_SUCCESS,
  EDIT_VIDEO_PLAYLIST_FAIL,
  DELETE_VIDEO_PLAYLIST,
  SET_MESSAGE,
} from "../../types/actionTypes";

import VideoServies from "../../../services/video-services";

export const browseVideoPlaylist = () => async (dispatch) => {
  try {
    const response = await VideoServies.browsePlaylist();

    if (response) {
      dispatch({
        type: BROWSE_VIDEO_PLAYLIST,
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

export const likeVideoPlaylist =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await VideoServies.likePlaylist(data);

      if (response) {
        dispatch({
          type: LIKE_VIDEO_PLAYLIST_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LIKE_VIDEO_PLAYLIST_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const unlikeVideoPlaylist =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = VideoServies.unlikePlaylist(data);

      if (response) {
        dispatch({
          type: UNLIKE_VIDEO_PLAYLIST_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: UNLIKE_VIDEO_PLAYLIST_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const favouriteVideoPlaylist =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await VideoServies.playlistFavorite(data);

      if (response) {
        dispatch({
          type: FAVOURITE_VIDEO_PLAYLIST_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: FAVOURITE_VIDEO_PLAYLIST_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const viewVideoPlaylist =
  (type, token, resource_id, playlist_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&playlist_id=${playlist_id}&language=null&auth_token=${token}&resource_id=${resource_id}&limit=10`;

      const response = await VideoServies.viewPlaylist(data);

      if (response) {
        dispatch({
          type: VIEW_VIDEO_PLAYLIST,
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

export const videoPlaylistEdit = (data) => async (dispatch) => {
  try {
    const response = await VideoServies.editPlaylist(data);

    if (response) {
      dispatch({
        type: EDIT_VIDEO_PLAYLIST_SUCCESS,
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
      type: EDIT_VIDEO_PLAYLIST_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const deleteVideoPlaylist = (playlist_id, token) => async (dispatch) => {
  try {
    const data = `playlist_id=${playlist_id}&language=null&auth_token=${token}`;
    const response = await VideoServies.deletePlaylist();

    if (response) {
      dispatch({
        type: DELETE_VIDEO_PLAYLIST,
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
