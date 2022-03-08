import {
  BROWSE_MUSIC_PLAYLIST,
  VIEW_MUSIC_PLAYLIST,
  FAVOURITE_MUSIC_PLAYLIST_SUCCESS,
  FAVOURITE_MUSIC_PLAYLIST_FAIL,
  EDIT_MUSIC_PLAYLIST_SUCCESS,
  EDIT_MUSIC_PLAYLIST_FAIL,
  SEARCH_MUSIC_PLAYLIST,
  SET_MESSAGE,
} from "../../types/actionTypes";

import MusicServices from "../../../services/music-services";

export const browsePlaylist = () => async (dispatch) => {
  try {
    const response = await MusicServices.browsePlaylist();

    if (response) {
      dispatch({
        type: BROWSE_MUSIC_PLAYLIST,
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

export const viewSongPlaylist =
  (type, token, resource_id, playlist_id) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&playlist_id=${playlist_id}&language=null&auth_token=${token}&page=1&resource_id=${resource_id}&limit=10`;

      const response = await MusicServices.viewPlaylist(data);

      if (response) {
        dispatch({
          type: VIEW_MUSIC_PLAYLIST,
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

export const favouriteMusicPlaylist =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await MusicServices.playlistFavorite(data);

      if (response) {
        dispatch({
          type: FAVOURITE_MUSIC_PLAYLIST_SUCCESS,
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
        type: FAVOURITE_MUSIC_PLAYLIST_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const musicPlaylistEdit = (data) => async (dispatch) => {
  try {
    const response = await MusicServices.editPlaylist(data);

    if (response) {
      dispatch({
        type: EDIT_MUSIC_PLAYLIST_SUCCESS,
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
      type: EDIT_MUSIC_PLAYLIST_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const searchPlaylist = (playlist_id, token) => async (dispatch) => {
  try {
    const data = `popularity=creation_date&title_name=a&subject=&language=null&auth_token=&show=1&page=1&execute=&limit=10&artists=`;
    const response = await MusicServices.searchPlaylist();

    if (response) {
      dispatch({
        type: SEARCH_MUSIC_PLAYLIST,
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
