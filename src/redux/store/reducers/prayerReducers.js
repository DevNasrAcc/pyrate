import {
  BROWSE_PRAYERS,
  LIKE_PRAYER_SUCCESS,
  LIKE_PRAYER_FAIL,
  UNLIKE_PRAYER_SUCCESS,
  UNLIKE_PRAYER_FAIL,
  PRAYER_CATEGORIES,
  VIEW_PRAYER,
  PRAYER_COMMENT_SUCCESS,
  PRAYER_COMMENT_FAIL,
  MY_PRAYER,
  EDIT_PRAYER_SUCCESS,
  EDIT_PRAYER_FAIL,
  CREATE_PRAYER_SUCCESS,
  CREATE_PRAYER_FAIL,
} from "../types/actionTypes";

const initialState = {
  browsePrayer: [],
  prayerCateg: [],
  viewPrayer: [],
  myPrayer: [],
  loading: false,
  error: null,
};

const prayerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_PRAYERS:
      return {
        ...state,
        browsePrayer: payload,
      };
    case LIKE_PRAYER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_PRAYER_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case UNLIKE_PRAYER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UNLIKE_PRAYER_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case PRAYER_COMMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRAYER_COMMENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case EDIT_PRAYER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_PRAYER_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case CREATE_PRAYER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PRAYER_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case PRAYER_CATEGORIES:
      return {
        ...state,
        prayerCateg: payload,
      };
    case VIEW_PRAYER:
      return {
        ...state,
        viewPrayer: payload,
      };
    case MY_PRAYER:
      return {
        ...state,
        myPrayer: payload,
      };
    default:
      return state;
  }
};

export default prayerReducer;
