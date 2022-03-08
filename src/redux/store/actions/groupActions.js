import {
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAIL,
  MENU,
  BROWSE_FEATURE,
  BROWSE_GROUP_ALBUM,
  GROUP_CATAGORY,
  GROUP_INFO,
  GROUP_ALBUM,
  GROUP_MEMBERS,
  DELETE_GROUP,
  SET_MESSAGE,
} from "../types/actionTypes";

import GroupServices from "../../services/group-services";

export const groupCreate = (data) => async (dispatch) => {
  try {
    const response = await GroupServices.createGroup(data);

    if (response) {
      dispatch({
        type: CREATE_GROUP_SUCCESS,
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
      type: CREATE_GROUP_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const groupDelete = (id) => async (dispatch) => {
  try {
    const response = await GroupServices.deleteGroup(id);

    if (response) {
      dispatch({
        type: DELETE_GROUP,
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

export const menu = () => async (dispatch) => {
  try {
    const response = await GroupServices.menu();

    if (response) {
      dispatch({
        type: MENU,
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

export const featureBrowse = () => async (dispatch) => {
  try {
    const response = await GroupServices.browseFeatured();

    if (response) {
      dispatch({
        type: BROWSE_FEATURE,
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

export const albumBrowse = () => async (dispatch) => {
  try {
    const response = await GroupServices.browseAlbum();

    if (response) {
      dispatch({
        type: BROWSE_GROUP_ALBUM,
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
    const response = await GroupServices.browseCategories();

    if (response) {
      dispatch({
        type: GROUP_CATAGORY,
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

export const infoGroup = () => async (dispatch) => {
  try {
    const response = await GroupServices.groupInformation();

    if (response) {
      dispatch({
        type: GROUP_INFO,
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

export const albumGroup = () => async (dispatch) => {
  try {
    const response = await GroupServices.groupAlbums();

    if (response) {
      dispatch({
        type: GROUP_ALBUM,
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

export const memberGroup = () => async (dispatch) => {
  try {
    const response = await GroupServices.groupMembers();

    if (response) {
      dispatch({
        type: GROUP_MEMBERS,
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
