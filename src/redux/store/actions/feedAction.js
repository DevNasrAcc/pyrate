import {
  ACTIVITY_SUCCESS,
  ACTIVITY_FAIL,
  SAVE_ACTIVITY_SUCCESS,
  SAVE_ACTIVITY_FAIL,
  UNHIDE_ACTIVITY_SUCCESS,
  UNHIDE_ACTIVITY_FAIL,
  UNSAVE_ACTIVITY_SUCCESS,
  UNSAVE_ACTIVITY_FAIL,
  HIDE_ACTIVITY_SUCCESS,
  HIDE_ACTIVITY_FAIL,
  ENABLE_FEED_SUCCESS,
  ENABLE_FEED_FAIL,
  DISABLE_FEED_SUCCESS,
  DISABLE_FEED_FAIL,
  SET_MESSAGE,
  DELETE_FEED,
} from "../types/actionTypes";

import uuid from "react-uuid";

import ActivtyServices from "../../services/feed-services";

export const feedPost = (user, limit, token) => async (dispatch) => {
  try {
    const data = `resource_type=${user}&resource_id=${uuid()}&limit=${limit}&auth_token=${token}`;

    const resonse = await ActivtyServices.postFeed(data);

    if (resonse) {
      dispatch({
        type: ACTIVITY_SUCCESS,
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
      type: ACTIVITY_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const feedSave = (activity_id, action_id, token) => async (dispatch) => {
  try {
    const data = `activity_id=${activity_id}&action_id=${action_id}&auth_token=${token}`;

    const response = await ActivtyServices.saveFeed(data);

    if (response) {
      dispatch({
        type: SAVE_ACTIVITY_SUCCESS,
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
      type: SAVE_ACTIVITY_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const feedUnsave =
  (activity_id, action_id, token) => async (dispatch) => {
    try {
      const data = `activity_id=${activity_id}&action_id=${action_id}&auth_token=${token}`;

      const response = await ActivtyServices.unsaveFeed(data);

      if (response) {
        dispatch({
          type: UNSAVE_ACTIVITY_SUCCESS,
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
        type: UNSAVE_ACTIVITY_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const feedHide = (activity_id, action_id, token) => async (dispatch) => {
  try {
    const data = `activity_id=${activity_id}&action_id=${action_id}&auth_token=${token}`;

    const response = await ActivtyServices.hideFeed(data);

    if (response) {
      dispatch({
        type: HIDE_ACTIVITY_SUCCESS,
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
      type: HIDE_ACTIVITY_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const feedUnhide =
  (activity_id, action_id, token) => async (dispatch) => {
    try {
      const data = `activity_id=${activity_id}&action_id=${action_id}&auth_token=${token}`;

      const response = await ActivtyServices.unhideFeed(data);

      if (response) {
        dispatch({
          type: UNHIDE_ACTIVITY_SUCCESS,
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
        type: UNHIDE_ACTIVITY_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const feedDelete =
  (activity_id, action_id, token) => async (dispatch) => {
    try {
      const data = `activity_id=${activity_id}&action_id=${action_id}&auth_token=${token}`;

      const resposne = await ActivtyServices.deleteFeed(data);

      if (response) {
        dispatch({
          type: DELETE_FEED,
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
        type: ACTIVITY_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const feedEnable =
  (activity_id, action_id, token) => async (dispatch) => {
    try {
      const data = `activity_id=${activity_id}&action_id=${action_id}&auth_token=${token}`;

      const response = await ActivtyServices.enableFeed(data);

      if (response) {
        dispatch({
          type: ENABLE_FEED_SUCCESS,
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
        type: ENABLE_FEED_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const feedDisable =
  (activity_id, action_id, token) => async (dispatch) => {
    try {
      const data = `activity_id=${activity_id}&action_id=${action_id}&auth_token=${token}`;

      const response = await ActivtyServices.disableFeed(data);

      if (response) {
        dispatch({
          type: DISABLE_FEED_SUCCESS,
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
        type: DISABLE_FEED_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };
