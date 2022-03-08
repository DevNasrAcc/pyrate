import {
  BROWSE_PRAYERS,
  LIKE_PRAYER_SUCCESS,
  LIKE_PRAYER_FAIL,
  UNLIKE_PRAYER_SUCCESS,
  UNLIKE_PRAYER_FAIL,
  SEARCH_PRAYER,
  PRAYER_CATEGORIES,
  VIEW_PRAYER,
  PRAYER_COMMENT_SUCCESS,
  PRAYER_COMMENT_FAIL,
  MY_PRAYER,
  EDIT_PRAYER_SUCCESS,
  EDIT_PRAYER_FAIL,
  CREATE_PRAYER_SUCCESS,
  CREATE_PRAYER_FAIL,
  DELETE_PRAYER,
  SET_MESSAGE,
} from "../types/actionTypes";

import PrayerSerives from "../../services/prayer-services";

export const browsePrayers = () => async (dispatch) => {
  try {
    const response = await PrayerSerives.browsePrayers();

    if (response) {
      dispatch({
        type: BROWSE_PRAYERS,
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

export const likePrayer = (type, resource_id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${resource_id}&&auth_token=${token}`;

    const response = await PrayerSerives.prayerLike(data);

    if (response) {
      dispatch({
        type: LIKE_PRAYER_SUCCESS,
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
      type: LIKE_PRAYER_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const unlikePrayer = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&auth_token=${token}`;

    const response = await PrayerSerives.prayerUnlike(data);

    if (response) {
      dispatch({
        type: UNLIKE_PRAYER_SUCCESS,
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
      type: UNLIKE_PRAYER_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const prayerSearch = () => async (dispatch) => {
  try {
    const response = await PrayerSerives.searchPrayer();

    if (response) {
      dispatch({
        type: SEARCH_PRAYER,
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

export const likePrayerComment = (type, id, token) => async (dispatch) => {
  try {
    const data = `resource_type=${type}&resource_id=${id}&language=null&auth_token=${token}`;

    const response = await PrayerSerives.likeComment(data);

    if (response) {
      dispatch({
        type: PRAYER_COMMENT_SUCCESS,
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
      type: PRAYER_COMMENT_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const viewPrayer = () => async (dispatch) => {
  try {
    const response = await PrayerSerives.viewPrayer();

    if (response) {
      dispatch({
        type: VIEW_PRAYER,
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

export const prayerCreate = (data) => async (dispatch) => {
  try {
    const response = await PrayerSerives.createPrayer(data);

    if (response) {
      dispatch({
        type: CREATE_PRAYER_SUCCESS,
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
      type: CREATE_PRAYER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const prayerEdit = (data) => async (dispatch) => {
  try {
    const response = await PrayerSerives.editPrayer(data);

    if (response) {
      dispatch({
        type: EDIT_PRAYER_SUCCESS,
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
      type: EDIT_PRAYER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const myPrayer = () => async (dispatch) => {
  try {
    const response = await PrayerSerives.myPrayer();

    if (response) {
      dispatch({
        type: MY_PRAYER,
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

export const viewPrayerCategory = (token, category_id) => async (dispatch) => {
  try {
    const data = `category_id=${category_id}&page=1&limit=10&auth_token=${token}`;

    const response = await PrayerSerives.viewPrayerCategory(data);

    if (response) {
      dispatch({
        type: PRAYER_CATEGORIES,
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

export const prayerDelete = (id) => async (dispatch) => {
  try {
    const response = await PrayerSerives.deletePrayer(id);

    if (response) {
      dispatch({
        type: DELETE_PRAYER,
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
