import {
  BROWSE_ARTIST_VIDEO,
  FAVOURITE_ARTIST_VIDEO_SUCCESS,
  FAVOURITE_ARTIST_VIDEO_FAIL,
  ARTIST_VIDEOS,
  SET_MESSAGE,
} from "../../types/actionTypes";

import VideoServies from "../../../services/video-services";

export const browseVideoArtist = () => async (dispatch) => {
  try {
    const response = await VideoServies.browseVideoArtist();

    if (response) {
      dispatch({
        type: BROWSE_ARTIST_VIDEO,
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

export const favouriteVideoArtist =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await VideoServies.artistFavorite(data);

      if (response) {
        dispatch({
          type: FAVOURITE_ARTIST_VIDEO_SUCCESS,
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
        type: FAVOURITE_ARTIST_VIDEO_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const getArtistVideo =
  (type, token, resource_id, artist_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&language=null&auth_token=${token}&artist_id=${artist_id}&resource_id=${resource_id}&page=1&limit=10`;

      const response = await VideoServies.getArtistVideo(data);

      if (response) {
        dispatch({
          type: ARTIST_VIDEOS,
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
