import {
  BROWSE_SONGS,
  SONGS_COMMENT_SUCCESS,
  SONGS_COMMENT_FAIL,
  LIKE_SONGS_SUCCESS,
  LIKE_SONGS_FAIL,
  FAVOURITE_SONGS_SUCCESS,
  FAVOURITE_SONGS_FAIL,
  ALL_SONGS_COMMENT,
  ADD_TO_PLAYLIST_SONGS_SUCCESS,
  ADD_TO_PLAYLIST_SONGS_FAIL,
  SONGS_LYRICS,
  SEARCH_SONGS,
  SET_MESSAGE,
} from "../../types/actionTypes";

import MusicServices from "../../../services/music-services";

export const browseSongs = () => async (dispatch) => {
  try {
    const response = await MusicServices.browseSongs();

    if (response) {
      dispatch({
        type: BROWSE_SONGS,
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

export const likeSongComment =
  (type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await MusicServices.commentLike(data);

      if (response) {
        dispatch({
          type: SONGS_COMMENT_SUCCESS,
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
        type: SONGS_COMMENT_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const likeSong =
  (type, resource_id, token, reaction_type) => async (dispatch) => {
    try {
      const data = `resource_type=${type}&reaction_type=${reaction_type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

      const response = await MusicServices.contentLike(data);

      if (response) {
        dispatch({
          type: LIKE_SONGS_SUCCESS,
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
        type: LIKE_SONGS_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const favouriteSong = (type, resource_id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${resource_id}&language=null&auth_token=${token}`;

    const response = await MusicServices.songFavorite(data);

    if (response) {
      dispatch({
        type: FAVOURITE_SONGS_SUCCESS,
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
      type: FAVOURITE_SONGS_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const songComment = (type, resource_id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&language=null&auth_token=${token}&page=1&resource_id=${resource_id}&limit=10`;
    const response = await MusicServices.songComment(data);

    if (response) {
      dispatch({
        type: ALL_SONGS_COMMENT,
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

export const addToPlaylist = (data) => async (dispatch) => {
  try {
    const response = await MusicServices.addSongToPlatylist(data);

    if (response) {
      dispatch({
        type: ADD_TO_PLAYLIST_SONGS_SUCCESS,
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
      type: ADD_TO_PLAYLIST_SONGS_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const getSongLyrics = () => async (dispatch) => {
  try {
    const response = await MusicServices.getSongLyrics();

    if (response) {
      dispatch({
        type: SONGS_LYRICS,
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

export const searchSong = () => async (dispatch) => {
  try {
    const response = await MusicServices.searchVideo();

    if (response) {
      dispatch({
        type: SEARCH_SONGS,
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
