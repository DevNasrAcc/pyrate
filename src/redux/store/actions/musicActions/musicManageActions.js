import {
  MY_MUSIC_ALBUMS,
  MY_MUSIC_PLAYLISTS,
  DELETE_PLAYLIST,
  SET_MESSAGE,
} from "../../types/actionTypes";

import MusicServies from "../../../services/music-services";

export const myAlbums = () => async (dispatch) => {
  try {
    const response = await MusicServies.myAlbums();

    if (response) {
      dispatch({
        type: MY_MUSIC_ALBUMS,
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
    const response = await MusicServies.myPlaylist();

    if (response) {
      dispatch({
        type: MY_MUSIC_PLAYLISTS,
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

export const deleteplaylist = (playlist_id, token) => async (dispatch) => {
  try {
    const data = `playlist_id=${playlist_id}&language=null&auth_token=${token}`;
    const response = await MusicServies.deleteMyPlaylist(data);

    if (response) {
      dispatch({
        type: DELETE_PLAYLIST,
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
