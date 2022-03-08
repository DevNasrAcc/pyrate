import {
  BROWSE_CONTEST,
  CREATE_CONTEST_SUCCESS,
  CREATE_CONTEST_FAIL,
  DELETE_CONTEST,
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
  SET_MESSAGE,
} from "../types/actionTypes";

import ContestServices from "../../services/contest-services";

export const browseContest = () => async (dispatch) => {
  try {
    const response = await ContestServices.browseContest();

    if (response) {
      dispatch({
        type: BROWSE_CONTEST,
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

export const contestCreate = (data) => async (dispatch) => {
  try {
    const response = await ContestServices.createContest(data);

    if (response) {
      dispatch({
        type: CREATE_CONTEST_SUCCESS,
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
      type: CREATE_CONTEST_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const contestDelete = (id) => async (dispatch) => {
  try {
    const response = await ContestServices.deleteContest(id);

    if (response) {
      dispatch({
        type: DELETE_CONTEST,
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
    const response = await ContestServices.menu();

    if (response) {
      dispatch({
        type: CONTEST_MENU,
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

export const favouriteContest = (data) => async (dispatch) => {
  try {
    const response = await ContestServices.favouriteContest(data);

    if (response) {
      dispatch({
        type: FAVOURITE_CONTESTS_SUCCESS,
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
      type: FAVOURITE_CONTESTS_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const viewContest = () => async (dispatch) => {
  try {
    const response = await ContestServices.viewContest();

    if (response) {
      dispatch({
        type: VIEW_CONTEST,
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

export const contestCategory = () => async (dispatch) => {
  try {
    const response = await ContestServices.contestCategory();

    if (response) {
      dispatch({
        type: CATEGORIES_CONTESTS,
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

export const editContest = (data) => async (dispatch) => {
  try {
    const response = await ContestServices.editContest(data);

    if (response) {
      dispatch({
        type: EDIT_CONTEST_SUCCESS,
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
      type: EDIT_CONTEST_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const likeContest = (data) => async (dispatch) => {
  try {
    const response = await ContestServices.likeConest(data);

    if (response) {
      dispatch({
        type: LIKE_CONTEST_SUCCESS,
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
      type: LIKE_CONTEST_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const leaveContest = (data) => async (dispatch) => {
  try {
    const response = await ContestServices.leaveContest(data);

    if (response) {
      dispatch({
        type: LEAVE_CONTEST_SUCCESS,
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
      type: LEAVE_CONTEST_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};
