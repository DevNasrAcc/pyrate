import {
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAIL,
  MENU,
  BROWSE_FEATURE,
  BROWSE_GROUP_ALBUM,
  GROUP_CATAGORY,
  GROUP_INFO,
  GROUP_ALBUM,
  GROUP_MEMBERS,
} from "../types/actionTypes";

const initialState = {
  menu: [],
  browseFeature: [],
  browseGroupAlb: [],
  groupCateg: [],
  groupInfo: [],
  groubAlbum: [],
  groubMembers: [],
  loading: false,
  error: null,
};

const groupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_GROUP_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case MENU:
      return {
        ...state,
        menu: payload,
      };
    case BROWSE_FEATURE:
      return {
        ...state,
        browseFeature: payload,
      };
    case BROWSE_GROUP_ALBUM:
      return {
        ...state,
        browseGroupAlb: payload,
      };
    case GROUP_CATAGORY:
      return {
        ...state,
        groupCateg: payload,
      };
    case GROUP_INFO:
      return {
        ...state,
        groupInfo: payload,
      };
    case GROUP_ALBUM:
      return {
        ...state,
        groubAlbum: payload,
      };
    case GROUP_MEMBERS:
      return {
        ...state,
        groubMembers: payload,
      };
    default:
      return state;
  }
};

export default groupReducer;
