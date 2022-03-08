import {
  BROWSE_ARTICLES,
  LIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAIL,
  UNLIKE_ARTICLE_SUCCESS,
  UNLIKE_ARTICLE_FAIL,
  FAVOURITE_ARTICLE_SUCCESS,
  FAVOURITE_ARTICLE_FAIL,
  ARTICLE_COMMENT_SUCCESS,
  ARTICLE_COMMENT_FAIL,
  VIEW_ARTICLE,
  ALL_ARTICLE_COMMENT,
  ARTICLE_CATEGORIES,
  VIEW_ARTICLE_CATEGORY,
  MY_ARTICLE,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAIL,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAIL,
} from "../types/actionTypes";

const initialState = {
  browseArticle: [],
  viewArticle: [],
  allArticleComm: [],
  articleCategory: [],
  viewArticleCateg: [],
  myArticle: [],
  loading: false,
  error: null,
};

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BROWSE_ARTICLES:
      return {
        ...state,
        browseArticle: payload,
      };
    case LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIKE_ARTICLE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case UNLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UNLIKE_ARTICLE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case FAVOURITE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAVOURITE_ARTICLE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case ARTICLE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ARTICLE_COMMENT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_ARTICLE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ARTICLE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case VIEW_ARTICLE:
      return {
        ...state,
        viewArticle: payload,
      };
    case ALL_ARTICLE_COMMENT:
      return {
        ...state,
        allArticleComm: payload,
      };
    case ARTICLE_CATEGORIES:
      return {
        ...state,
        articleCategory: payload,
      };
    case VIEW_ARTICLE_CATEGORY:
      return {
        ...state,
        viewArticleCateg: payload,
      };
    case MY_ARTICLE:
      return {
        ...state,
        myArticle: payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
