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
  DELETE_ARTICLE,
  SET_MESSAGE,
} from "../types/actionTypes";

import ArticleServices from "../../services/article-services";

export const browseArticle = () => async (dispatch) => {
  try {
    const response = await ArticleServices.browseArticles();

    if (response) {
      dispatch({
        type: BROWSE_ARTICLES,
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

export const likeArticle = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

    const response = await ArticleServices.articleLike(data);

    if (response) {
      dispatch({
        type: LIKE_ARTICLE_SUCCESS,
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
      type: LIKE_ARTICLE_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const unlikeArticle = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

    const response = await ArticleServices.articleUnlike(data);

    if (response) {
      dispatch({
        type: UNLIKE_ARTICLE_SUCCESS,
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
      type: UNLIKE_ARTICLE_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const favouriteArticle = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

    const response = await ArticleServices.articleLike(data);

    if (response) {
      dispatch({
        type: FAVOURITE_ARTICLE_SUCCESS,
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
      type: FAVOURITE_ARTICLE_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const likeArticleComment = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

    const response = await ArticleServices.likeComment(data);

    if (response) {
      dispatch({
        type: ARTICLE_COMMENT_SUCCESS,
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
      type: ARTICLE_COMMENT_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const viewArticle = () => async (dispatch) => {
  try {
    const response = await ArticleServices.viewArticle();

    if (response) {
      dispatch({
        type: VIEW_ARTICLE,
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

export const articleComments = () => async (dispatch) => {
  try {
    const response = await ArticleServices.getArticleComment();

    if (response) {
      dispatch({
        type: ALL_ARTICLE_COMMENT,
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

export const articleCreate = (data) => async (dispatch) => {
  try {
    const response = await ArticleServices.createArticle(data);

    if (response) {
      dispatch({
        type: CREATE_ARTICLE_SUCCESS,
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
      type: CREATE_ARTICLE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const articleEdit = (data) => async (dispatch) => {
  try {
    const response = await ArticleServices.editArticle(data);

    if (response) {
      dispatch({
        type: EDIT_ARTICLE_SUCCESS,
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
      type: EDIT_ARTICLE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const myArticle = () => async (dispatch) => {
  try {
    const response = await ArticleServices.myArticle();

    if (response) {
      dispatch({
        type: MY_ARTICLE,
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

export const artivleCategories = () => async (dispatch) => {
  try {
    const response = await ArticleServices.getArticleCategory();

    if (response) {
      dispatch({
        type: ARTICLE_CATEGORIES,
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

export const viewArticleCategory = (token, id) => async (dispatch) => {
  try {
    const data = `language=null&auth_token=${token}&category_id=${id}&page=1&limit=10`;

    const response = await ArticleServices.viewArticleCategory(data);

    if (response) {
      dispatch({
        type: VIEW_ARTICLE_CATEGORY,
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

export const articleDelete = (id) => async (dispatch) => {
  try {
    const response = await ArticleServices.deleteArticle(id);

    if (response) {
      dispatch({
        type: DELETE_ARTICLE,
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
