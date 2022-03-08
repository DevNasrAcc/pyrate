import {
  BROWSE_CONTEST,
  CREATE_CONTEST_SUCCESS,
  CREATE_CONTEST_FAIL,
  CONTEST_MENU,
  FAVOURITE_CONTESTS_SUCCESS,
  FAVOURITE_CONTESTS_FAIL,
  VIEW_CONTEST,
  CATEGORIES_CONTESTS,
  EDIT_CONTEST_SUCCESS,
  EDIT_CONTEST_FAIL,
  LEAVE_CONTEST_SUCCESS,
  LEAVE_CONTEST_FAIL,
  LIKE_CONTEST_SUCCESS,
  LIKE_CONTEST_FAIL,
} from "../types/actionTypes";

const initialState = {
  browseContest: [],
  menu: [],
  viewContest: [],
  contestCateg: [],
  loading: false,
  error: null,
};

const contestReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_CONTEST:
      return {
        ...state,
        browseContest: payload,
      };
    case CREATE_CONTEST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_CONTEST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case CONTEST_MENU:
      return {
        ...state,
        menu: payload,
      };
    case FAVOURITE_CONTESTS_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_CONTESTS_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_CONTEST:
      return {
        ...state,
        viewContest: payload,
      };
    case CATEGORIES_CONTESTS:
      return {
        ...state,
        contestCateg: payload,
      };
    case EDIT_CONTEST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_CONTEST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case LEAVE_CONTEST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LEAVE_CONTEST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case LIKE_CONTEST_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_CONTEST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default contestReducer;
