import {
  BROWSE_ALBUM,
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAIL,
  DELETE_ALBUM,
  BROWSE_ALBUM_PHOTOS,
  ALBUM_CATEGORY,
  ALBUM_VIEW,
  MY_ALBUM,
  SEARCH_ALBUM,
  ALBUM_COMMENT,
  SET_MESSAGE,
} from "../types/actionTypes";

import AlbumServices from "../../services/album-services";

export const browseAlbum = () => async (dispatch) => {
  try {
    const response = await AlbumServices.albumBrowse();

    if (response) {
      dispatch({
        type: BROWSE_ALBUM,
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

export const browsePhotos = () => async (dispatch) => {
  try {
    const response = await AlbumServices.albumPhotos();

    if (response) {
      dispatch({
        type: BROWSE_ALBUM_PHOTOS,
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

export const categoryBrowse = () => async (dispatch) => {
  try {
    const response = await AlbumServices.browseAlbumCategory();

    if (response) {
      dispatch({
        type: ALBUM_CATEGORY,
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

export const albumCreate = (data) => async (dispatch) => {
  try {
    const response = await AlbumServices.createAlbum(data);

    if (response) {
      dispatch({
        type: CREATE_ALBUM_SUCCESS,
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
      type: CREATE_ALBUM_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const albumView = () => async (dispatch) => {
  try {
    const response = await AlbumServices.albumView();

    if (response) {
      dispatch({
        type: ALBUM_VIEW,
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

export const myAlbums = () => async (dispatch) => {
  try {
    const response = await AlbumServices.myAlbums();

    if (response) {
      dispatch({
        type: MY_ALBUM,
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
    const response = await AlbumServices.albumSearch();

    if (response) {
      dispatch({
        type: SEARCH_ALBUM,
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

export const albumDelete = (id) => async (dispatch) => {
  try {
    const response = await AlbumServices.deleteAlbum(id);

    if (response) {
      dispatch({
        type: DELETE_ALBUM,
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
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const albumComment = () => async (dispatch) => {
  try {
    const response = await AlbumServices.albumComment();

    if (response) {
      dispatch({
        type: ALBUM_COMMENT,
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
