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
  DELETE_CHANNEL_VIDEO,
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
  DELETE_CHANNEL,
  SEARCH_CHANNEL,
  SET_MESSAGE,
} from "../../types/actionTypes";

import VideoChannelServies from "../../../services/channel-services";

export const viewVideoChannel = () => async (dispatch) => {
  try {
    const response = await VideoChannelServies.viewChannel();

    if (response) {
      dispatch({
        type: VIEW_CHANNEL_VIDEO,
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

export const likeVideoChannelComment =
  (type, id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

      const response = await VideoChannelServies.likeComment(data);

      if (response) {
        dispatch({
          type: CHANNEL_VIDEO_COMMENT_SUCCESS,
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
        type: CHANNEL_VIDEO_COMMENT_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const channelComposer = () => async (dispatch) => {
  try {
    const response = await VideoChannelServies.channelComposer();

    if (response) {
      dispatch({
        type: CHANNEL_VIDEO_COMPOSER,
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

export const channelFeed = () => async (dispatch) => {
  try {
    const response = await VideoChannelServies.channelFeed();

    if (response) {
      dispatch({
        type: CHANNEL_VIDEO_FEED,
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

export const browseVideoChannel = () => async (dispatch) => {
  try {
    const response = await VideoChannelServies.browseVideoChannel();

    if (response) {
      dispatch({
        type: BROWSE_CHANNEL_VIDEO,
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

export const rateVideoChannel =
  (type, id, token, rating) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&language=null&rating=${rating}&auth_token=${token}&resource_id=${id}`;

      const response = await VideoChannelServies.rateChannel(data);

      if (response) {
        dispatch({
          type: RATE_CHANNEL_SUCCESS,
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
        type: RATE_CHANNEL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const getChannelVides =
  (type, video_id, token, resource_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&playlist_id=${video_id}&language=null&auth_token=${token}&resource_id=${resource_id}&limit=10`;
      const response = await VideoChannelServies.channelVideos(data);

      if (response) {
        dispatch({
          type: CHANNEL_VIDEOS,
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

export const deleteChannelVideo =
  (type, token, resource_id, id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&language=null&auth_token=${token}&resource_id=${resource_id}video_id=${id}`;
      const response = await VideoChannelServies.deleteChannelVideos(data);

      if (response) {
        dispatch({
          type: DELETE_CHANNEL_VIDEO,
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

export const channelInfo = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&id=${id}&language=null&auth_token=${token}`;
    const response = await VideoChannelServies.channelInfo(data);

    if (response) {
      dispatch({
        type: CHANNEL_INFO,
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

export const channelPhotos =
  (type, channel_id, token, resource_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&chanel_id=${channel_id}&language=null&auth_token=${token}&resource_id=${resource_id}&page=1&limit=10`;
      const response = await VideoChannelServies.channelPhotos(data);

      if (response) {
        dispatch({
          type: CHANNEL_PHOTOS,
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

export const channelComment =
  (type, token, resource_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&language=null&auth_token=${token}&page=1&resource_id=${resource_id}&limit=10`;
      const response = await VideoChannelServies.channelComment(data);

      if (response) {
        dispatch({
          type: CHANNEL_COMMENT,
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

export const likeChannel =
  (type, resource_id, token, channel_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&chanel_id=${channel_id}&language=null&auth_token=${token}`;

      const response = await VideoChannelServies.channelLike(data);

      if (response) {
        dispatch({
          type: LIKE_CHANNEL_SUCCESS,
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
        type: LIKE_CHANNEL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const unlikeChannel =
  (type, resource_id, token, channel_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&chanel_id=${channel_id}&language=null&auth_token=${token}`;

      const response = await VideoChannelServies.channelUnlike(data);

      if (response) {
        dispatch({
          type: UNLIKE_CHANNEL_SUCCESS,
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
        type: UNLIKE_CHANNEL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const favouriteChannel =
  (type, resource_id, token, channel_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&chanel_id=${channel_id}&language=null&auth_token=${token}`;

      const response = await VideoChannelServies.channelFavorite(data);

      if (response) {
        dispatch({
          type: FAVOURITE_CHANNEL_SUCCESS,
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
        type: FAVOURITE_CHANNEL_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const channelEdit = (data) => async (dispatch) => {
  try {
    const response = await VideoChannelServies.channelEdit(data);

    if (response) {
      dispatch({
        type: EDIT_CHANNEL_SUCCESS,
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
      type: EDIT_CHANNEL_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const deleteChannel = () => async (dispatch) => {
  try {
    const response = await VideoChannelServies.channelDelete();

    if (response) {
      dispatch({
        type: DELETE_CHANNEL,
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

export const followChannel =
  (type, resource_id, channel_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&chanel_id=${channel_id}&language=null&auth_token=${token}`;
      const response = await VideoChannelServies.channelFollow(data);

      if (response) {
        dispatch({
          type: FOLLOW_CHANNEL,
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

export const searchChannel = () => async (dispatch) => {
  try {
    const response = await VideoChannelServies.channelSearch();

    if (response) {
      dispatch({
        type: SEARCH_CHANNEL,
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
