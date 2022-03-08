import {
  ALL_JOINED_NETWORK,
  AVAILABLE_NETWORK,
  JOIN_NETWORK_SUCCESS,
  JOIN_NETWORK_FAIL,
} from "../../types/actionTypes";

const initialState = {
  joinedNet: [],
  availableNet: [],
  loading: false,
  error: null,
};

const networkReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_JOINED_NETWORK:
      return {
        ...state,
        joinedNet: payload,
      };
    case AVAILABLE_NETWORK:
      return {
        ...state,
        availableNet: payload,
      };
    case JOIN_NETWORK_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case JOIN_NETWORK_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    default:
      return state;
  }
};

export default networkReducer;
