import {
  SUBCATEGORY_SUCCESS,
  SUBCATEGORY_FAIL,
  SUB_SUBCATEGORY_SUCCESS,
  SUB_SUBCATEGORY_FAIL,
  SUBMIT_REPORT_SUCCESS,
  SUBMIT_REPORT_FAIL,
  CONTENT_FAVOURITE_SUCCESS,
  CONTENT_FAVOURITE_FAIL,
  LIKED_ALBUM_SUCCESS,
  LIKED_ALBUM_FAIL,
  ALBUM_COMMNET_LIKE_SUCCESS,
  ALBUM_COMMNET_LIKE_FAIL,
  SHARE_ON_FEED_SUCCESS,
  SHARE_ON_FEED_FAIL,
  SET_MESSAGE,
} from "../types/actionTypes";

import CommonServices from "../../services/common-serrvices";

export const subCategory = (data) => async (dispatch) => {
  try {
    const response = await CommonServices.subCategory(data);

    if (response) {
      dispatch({
        type: SUBCATEGORY_SUCCESS,
        payload: response.data,
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
      type: SUBCATEGORY_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const subSubCategory = (data) => async (dispatch) => {
  try {
    const response = await CommonServices.subSubCategory(data);

    if (response) {
      dispatch({
        type: SUB_SUBCATEGORY_SUCCESS,
        payload: response.data,
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
      type: SUB_SUBCATEGORY_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const submitReport =
  (subject_id, desc, token, category, submit) => async (dispatch) => {
    try {
      const data = `subject=${subject_id}&submit=${submit}&language=null&des=${desc}&auth_token=${token}&category=${category}`;
      const response = await CommonServices.submitReport();

      if (response) {
        dispatch({
          type: SUBMIT_REPORT_SUCCESS,
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
        type: SUBMIT_REPORT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const contentFavourite =
  (resource_type, resource_id, token) => async (dispatch) => {
    try {
      const data = `resource_type=${resource_type}}&resource_id=${resource_id}&language=null&auth_token=${token}`;
      const response = await CommonServices.favouriteAlbumCommon();

      if (response) {
        dispatch({
          type: CONTENT_FAVOURITE_SUCCESS,
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
        type: CONTENT_FAVOURITE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  };

export const albumLiked = (data) => async (dispatch) => {
  try {
    const response = await CommonServices.likeAlbumCommon(data);

    if (response) {
      dispatch({
        type: LIKED_ALBUM_SUCCESS,
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
      type: LIKED_ALBUM_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const albumCommentLike = (data) => async (dispatch) => {
  try {
    const response = await CommonServices.likeComment(data);

    if (response) {
      dispatch({
        type: ALBUM_COMMNET_LIKE_SUCCESS,
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
      type: ALBUM_COMMNET_LIKE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const shareOnFeed = (data) => async (dispatch) => {
  try {
    const response = await CommonServices.shareOnFeed(data);

    if (response) {
      dispatch({
        type: SHARE_ON_FEED_SUCCESS,
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
      type: SHARE_ON_FEED_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
