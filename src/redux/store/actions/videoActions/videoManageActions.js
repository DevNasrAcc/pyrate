import {
  MY_VIDEOS,
  MY_CHANNEL_VIDEOS,
  MY_CHANNEL_PLAYLISTS,
  VIDEOS_SELECTED_CATEGORY,
  VIDEO_CATEGORY,
  SET_MESSAGE,
} from "../../types/actionTypes";

import VideoServies from "../../../services/video-services";

export const myVideos = () => async (dispatch) => {
  try {
    const response = await VideoServies.getMyVidoes();

    if (response) {
      dispatch({
        type: MY_VIDEOS,
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

export const myChannel = () => async (dispatch) => {
  try {
    const response = await VideoServies.getMyChannel();

    if (response) {
      dispatch({
        type: MY_CHANNEL_VIDEOS,
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

export const myPlaylist = () => async (dispatch) => {
  try {
    const response = await VideoServies.getMyPlaylist();

    if (response) {
      dispatch({
        type: MY_CHANNEL_PLAYLISTS,
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

export const getSelectedCategory = () => async (dispatch) => {
  try {
    const response = await VideoServies.getSelectedCategory();

    if (response) {
      dispatch({
        type: VIDEOS_SELECTED_CATEGORY,
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

export const videoCategory = () => async (dispatch) => {
  try {
    const response = await VideoServies.getVideoCategory();

    if (response) {
      dispatch({
        type: VIDEO_CATEGORY,
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
