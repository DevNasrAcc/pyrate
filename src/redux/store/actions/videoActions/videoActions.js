import {
  BROWSE_VIDEO,
  VIDEO_COMMENT_SUCCESS,
  VIDEO_COMMENT_FAIL,
  VIEW_VIDEO,
  LIKE_VIDEO_SUCCESS,
  LIKE_VIDEO_FAIL,
  UNLIKE_VIDEO_FAIL,
  UNLIKE_VIDEO_SUCCESS,
  FAVOURITE_VIDEO_SUCCESS,
  FAVOURITE_VIDEO_FAIL,
  WATCH_VIDEO_LATER_SUCCESS,
  WATCH_VIDEO_LATER_FAIL,
  ADD_TO_PLAYLIST_VIDEO_SUCCESS,
  ADD_TO_PLAYLIST_VIDEO_FAIL,
  SEARCH_VIDEO,
  DELETE_VIDEO,
  EDIT_VIDEO_SUCCESS,
  EDIT_VIDEO_FAIL,
  CREATE_VIDEO_SUCCESS,
  CREATE_VIDEO_FAIL,
  SET_MESSAGE,
} from "../../types/actionTypes";

import VideoServies from "../../../services/video-services";

export const browseVideo = () => async (dispatch) => {
  try {
    const response = await VideoServies.browseVideos();

    if (response) {
      dispatch({
        type: BROWSE_VIDEO,
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

export const likeVideoComment =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await VideoServies.likeComment(data);

      if (response) {
        dispatch({
          type: VIDEO_COMMENT_SUCCESS,
          payload: response.data,
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
        type: VIDEO_COMMENT_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const viewVideo =
  (type, token, resource_id, video_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&language=null&auth_token=${token}&resource_id=${resource_id}&limit=10&video_id=${video_id}`;

      const response = await VideoServies.viewVideo(data);

      if (response) {
        dispatch({
          type: VIEW_VIDEO,
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

export const likeVideo = (type, resource_id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

    const response = await VideoServies.likeVideo(data);

    if (response) {
      dispatch({
        type: LIKE_VIDEO_SUCCESS,
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
      type: LIKE_VIDEO_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const unlikeVideo =
  (type, resource_id, token, channel_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&chanel_id=${channel_id}&language=null&auth_token=${token}`;

      const response = data;

      if (response) {
        dispatch({
          type: UNLIKE_VIDEO_SUCCESS,
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
        type: UNLIKE_VIDEO_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const favouriteVideo =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await VideoServies.videoFavorite(data);

      if (response) {
        dispatch({
          type: FAVOURITE_VIDEO_SUCCESS,
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
        type: FAVOURITE_VIDEO_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const watchVideoLater = (video_id, token) => async (dispatch) => {
  try {
    const data = `language=null&auth_token=${token}&video_id=${video_id}`;

    const response = await VideoServies.watchLater(data);

    if (response) {
      dispatch({
        type: WATCH_VIDEO_LATER_SUCCESS,
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
      type: WATCH_VIDEO_LATER_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const addToPlaylist = (data) => async (dispatch) => {
  try {
    const response = await VideoServies.addToPlayList(data);

    if (response) {
      dispatch({
        type: ADD_TO_PLAYLIST_VIDEO_SUCCESS,
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
      type: ADD_TO_PLAYLIST_VIDEO_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const searchVideo = () => async (dispatch) => {
  try {
    const response = await VideoServies.searchVideo();

    if (response) {
      dispatch({
        type: SEARCH_VIDEO,
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

export const deleteVideo = () => async (dispatch) => {
  try {
    const response = await VideoServies.deleteVideos();

    if (response) {
      dispatch({
        type: DELETE_VIDEO,
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

export const videoCreate = (data) => async (dispatch) => {
  try {
    const response = await VideoServies.createVideo(data);

    if (response) {
      dispatch({
        type: CREATE_VIDEO_SUCCESS,
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
      type: CREATE_VIDEO_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const videoEdit = (data) => async (dispatch) => {
  try {
    const response = await VideoServies.editVideo(data);

    if (response) {
      dispatch({
        type: EDIT_VIDEO_SUCCESS,
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
      type: EDIT_VIDEO_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
