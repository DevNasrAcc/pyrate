import {
  BROWSE_PAGES,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAIL,
  DELETE_PAGE,
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
  SET_MESSAGE,
} from "../types/actionTypes";

import PageServices from "../../services/page-services";

export const browsePage = () => async (dispatch) => {
  try {
    const response = await PageServices.browsePages();

    if (response) {
      dispatch({
        type: BROWSE_PAGES,
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

export const pageCreate = (data) => async (dispatch) => {
  try {
    const response = await PageServices.createPage(data);

    if (response) {
      dispatch({
        type: CREATE_PAGE_SUCCESS,
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
      type: CREATE_PAGE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const pageDelete = (id) => async (dispatch) => {
  try {
    const response = await PageServices.deletePage(id);

    if (response) {
      dispatch({
        type: DELETE_PAGE,
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

export const menu = () => async (dispatch) => {
  try {
    const response = await PageServices.menu();

    if (response) {
      dispatch({
        type: PAGE_MENU,
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

export const likePage = (data) => async (dispatch) => {
  try {
    const response = await PageServices.likePage(data);

    if (response) {
      dispatch({
        type: LIKE_PAGE_SUCCESS,
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
      type: LIKE_PAGE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const viewPage = () => async (dispatch) => {
  try {
    const response = await PageServices.viewPage();

    if (response) {
      dispatch({
        type: VIEW_PAGE,
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

export const pageCategory = () => async (dispatch) => {
  try {
    const response = await PageServices.pageCategory();

    if (response) {
      dispatch({
        type: CATEGORIES_PAGES,
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

export const pageInformation = () => async (dispatch) => {
  try {
    const response = await PageServices.pageInformation();

    if (response) {
      dispatch({
        type: PAGE_INFORMATION,
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

export const editPage = (id, data) => async (dispatch) => {
  try {
    const response = await PageServices.editPage(id, data);

    if (response) {
      dispatch({
        type: EDIT_PAGE_SUCCESS,
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
      type: EDIT_PAGE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const leavePage = (data) => async (dispatch) => {
  try {
    const response = await PageServices.leavePage(data);

    if (response) {
      dispatch({
        type: LEAVE_PAGE_SUCCESS,
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
      type: LEAVE_PAGE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const managePage = (data) => async (dispatch) => {
  try {
    const response = await PageServices.managePage(data);

    if (response) {
      dispatch({
        type: MANAGE_PAGE_SUCCESS,
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
      type: MANAGE_PAGE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const pageMember = () => async (dispatch) => {
  try {
    const response = await PageServices.pageMember();

    if (response) {
      dispatch({
        type: PAGE_MEMBER,
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

export const followPage = (id, type) => async (dispatch) => {
  try {
    const response = await PageServices.followPage(id, type);

    if (response) {
      dispatch({
        type: FOLLOW_PAGES_SUCCESS,
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
      type: FOLLOW_PAGES_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
