import {
  PASSWORD_FORM_SUCCESS,
  PASSWORD_FORM_FAIL,
} from "../../types/actionTypes";

const initialState = {
  loading: false,
  error: null,
};

const passwordReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PASSWORD_FORM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PASSWORD_FORM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default passwordReducer;
