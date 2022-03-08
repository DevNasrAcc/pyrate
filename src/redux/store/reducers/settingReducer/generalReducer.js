import {
  GENERAL_FORM_SUCCESS,
  GENERAL_FORM_FAIL,
} from "../../types/actionTypes";

const initialState = {
  loading: false,
  error: null,
  settings: null
};

const generalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GENERAL_FORM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        settings: payload
      };
    case GENERAL_FORM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
        settings: null
      };
    default:
      return state;
  }
};

export default generalReducer;
