import {
  PRIVACY_FORM_SUCCESS,
  PRIVACY_FORM_FAIL,
} from "../../types/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const privacyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRIVACY_FORM_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRIVACY_FORM_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default privacyReducer;
