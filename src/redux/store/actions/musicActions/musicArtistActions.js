import {
  BROWSE_ARTIST_MUSIC,
  VIEW_ARTIST_MUSIC,
  SET_MESSAGE,
} from "../../types/actionTypes";

import VideoServies from "../../../services/video-services";

export const browseVideoArtist = () => async (dispatch) => {
  try {
    const response = await VideoServies.browseVideoArtist();

    if (response) {
      dispatch({
        type: BROWSE_ARTIST_MUSIC,
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
      const data = `resource_type=${type}&language=null&auth_token=${token}&artist_id=1&page=1&resource_id=${resource_id}&limit=10`;

      const response = await VideoServies.browseVideoArtist();

      if (response) {
        dispatch({
          type: VIEW_ARTIST_MUSIC,
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
