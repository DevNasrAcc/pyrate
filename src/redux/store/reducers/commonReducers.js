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
} from "../types/actionTypes";

const initialState = {
  loading: false,
  error: null,
};

const commonReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBCATEGORY_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case SUBCATEGORY_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case SUB_SUBCATEGORY_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case SUB_SUBCATEGORY_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case SUB_SUBCATEGORY_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case SUB_SUBCATEGORY_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case SUBMIT_REPORT_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case SUBMIT_REPORT_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case CONTENT_FAVOURITE_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case CONTENT_FAVOURITE_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case LIKED_ALBUM_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case LIKED_ALBUM_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case ALBUM_COMMNET_LIKE_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case ALBUM_COMMNET_LIKE_FAIL:
      return {
        loading: true,
        error: payload,
      };
    case SHARE_ON_FEED_SUCCESS:
      return {
        loading: true,
        error: null,
      };
    case SHARE_ON_FEED_FAIL:
      return {
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
