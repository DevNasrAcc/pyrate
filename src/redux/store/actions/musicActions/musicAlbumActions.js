import {
  BROWSE_MUSIC_ALBUM,
  RATE_MUSIC_ALBUM_SUCCESS,
  RATE_MUSIC_ALBUM_FAIL,
  LIKE_MUSIC_ALBUM_SUCCESS,
  LIKE_MUSIC_ALBUM_FAIL,
  FAVOURITE_MUSIC_ALBUM_SUCCESS,
  FAVOURITE_MUSIC_ALBUM_FAIL,
  ADD_TO_PLAYLIST_MUSIC_SUCCESS,
  ADD_TO_PLAYLIST_MUSIC_FAIL,
  VIEW_MUSIC_ALBUM,
  MUSIC_ALBUM_COMMENT,
  SEARCH_MUSIC_ALBUM,
  SET_MESSAGE,
} from "../../types/actionTypes";

import MusicAlbum from "../../../services/music-services";

export const browseMusicALbum = () => async (dispatch) => {
  try {
    const response = await MusicAlbum.browseAlbum();

    if (response) {
      dispatch({
        type: BROWSE_MUSIC_ALBUM,
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

export const rateMusicAlbum =
  (type, resource_id, token, rating) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&language=null&rating=${rating}&auth_token=${token}&resource_id=${resource_id}`;

      const response = await MusicAlbum.rateMusicAlbum(data);

      if (response) {
        dispatch({
          type: RATE_MUSIC_ALBUM_SUCCESS,
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
        type: RATE_MUSIC_ALBUM_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const likeMusicAlbum =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await MusicAlbum.albumLike(data);

      if (response) {
        dispatch({
          type: LIKE_MUSIC_ALBUM_SUCCESS,
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
        type: LIKE_MUSIC_ALBUM_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const favouriteMusicAlbunm =
  (type, resource_id, token, channel_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&chanel_id=${channel_id}&language=null&auth_token=${token}`;

      const response = await MusicAlbum.albumFavorite(data);

      if (response) {
        dispatch({
          type: FAVOURITE_MUSIC_ALBUM_SUCCESS,
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
        type: FAVOURITE_MUSIC_ALBUM_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const addToPlaylist = (data) => async (dispatch) => {
  try {
    const response = await MusicAlbum.addToPlayList(data);

    if (response) {
      dispatch({
        type: ADD_TO_PLAYLIST_MUSIC_SUCCESS,
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
      type: ADD_TO_PLAYLIST_MUSIC_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const viewMusicAlbum = () => async (dispatch) => {
  try {
    const response = await MusicAlbum.albumView();

    if (response) {
      dispatch({
        type: VIEW_MUSIC_ALBUM,
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

export const getAlbumComments =
  (type, token, resource_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&language=null&auth_token=${token}&page=1&resource_id=${resource_id}&limit=10`;
      const response = await MusicAlbum.getAlbumComments(data);

      if (response) {
        dispatch({
          type: MUSIC_ALBUM_COMMENT,
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
    const response = await MusicAlbum.searchAlbum();

    if (response) {
      dispatch({
        type: SEARCH_MUSIC_ALBUM,
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
