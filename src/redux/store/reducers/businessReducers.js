import {
  BROWSE_BUSINESS,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_FAIL,
  BUSINESS_MENU,
  FAVOURITE_BUSINESSS_SUCCESS,
  FAVOURITE_BUSINESSS_FAIL,
  VIEW_BUSINESS,
  CATEGORIES_BUSINESSS,
  EDIT_BUSINESS_SUCCESS,
  EDIT_BUSINESS_FAIL,
  BUSINESS_INFORMATION,
  BUSINESS_MEMBER,
  LIKE_BUSINESS_SUCCESS,
  LIKE_BUSINESS_FAIL,
  BUSINESS_FOLLOW_SUCCESS,
  BUSINESS_FOLLOW_FAIL,
} from "../types/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const businessReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_BUSINESS:
      return {
        ...state,
        data: payload,
      };
    case CREATE_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_BUSINESS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case BUSINESS_MENU:
      return {
        ...state,
        data: payload,
      };
    case FAVOURITE_BUSINESSS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_BUSINESSS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_BUSINESS:
      return {
        ...state,
        data: payload,
      };
    case CATEGORIES_BUSINESSS:
      return {
        ...state,
        data: payload,
      };
    case EDIT_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_BUSINESS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case BUSINESS_INFORMATION:
      return {
        ...state,
        data: payload,
      };
    case BUSINESS_MEMBER:
      return {
        ...state,
        data: payload,
      };
    case LIKE_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_BUSINESS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case BUSINESS_FOLLOW_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BUSINESS_FOLLOW_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default businessReducer;
