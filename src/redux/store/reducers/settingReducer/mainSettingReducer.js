import {
  GET_SETTINGS,
  SHOW_PRIVACY,
  SHOW_TERMS_CONDITIIONS,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from "../../types/actionTypes";

const initialState = {
  getSettings: [],
  showPrivacy: [],
  termsCond: [],
  loading: false,
  error: null,
};

const mainSettingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SETTINGS:
      return {
        ...state,
        getSettings: payload,
      };
    case SHOW_PRIVACY:
      return {
        ...state,
        showPrivacy: payload,
      };
    case SHOW_TERMS_CONDITIIONS:
      return {
        ...state,
        termsCond: payload,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_PROFILE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default mainSettingReducer;
