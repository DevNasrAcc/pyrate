import {
  BROWSE_PAGES,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAIL,
  PAGE_MENU,
  LIKE_PAGE_SUCCESS,
  LIKE_PAGE_FAIL,
  VIEW_PAGE,
  CATEGORIES_PAGES,
  PAGE_INFORMATION,
  LEAVE_PAGE_SUCCESS,
  LEAVE_PAGE_FAIL,
  EDIT_PAGE_SUCCESS,
  EDIT_PAGE_FAIL,
  MANAGE_PAGE_SUCCESS,
  MANAGE_PAGE_FAIL,
  PAGE_MEMBER,
  FOLLOW_PAGES_SUCCESS,
  FOLLOW_PAGES_FAIL,
} from "../types/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const albumReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_PAGES:
      return {
        ...state,
        data: payload,
      };
    case CREATE_PAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PAGE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case PAGE_MENU:
      return {
        ...state,
        data: payload,
      };
    case LIKE_PAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_PAGE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_PAGE:
      return {
        ...state,
        data: payload,
      };
    case CATEGORIES_PAGES:
      return {
        ...state,
        data: payload,
      };
    case PAGE_INFORMATION:
      return {
        ...state,
        data: payload,
      };
    case LEAVE_PAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LEAVE_PAGE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case EDIT_PAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_PAGE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case MANAGE_PAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MANAGE_PAGE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case PAGE_MEMBER:
      return {
        ...state,
        data: payload,
      };
    case FOLLOW_PAGES_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FOLLOW_PAGES_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
