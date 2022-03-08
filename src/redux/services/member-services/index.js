import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const friendRequest = (data) => {
  return axios
    .post(`${API_URL}/navigation/friend-requests/${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const addFriend = (data) => {
  return axios
    .post(`${API_URL}/navigation/confirm${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const ignoreFriendRequest = () => {
  return axios
    .post(`${API_URL}/navigation/reject${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const memberView = (id) => {
  return axios
    .get(`${API_URL}/profile/${id}${API_URL_SUFFIX}`, { headers: headers })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getProfileInfo = () => {
  return axios
    .get(`${API_URL}/user/profile/user-info${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const memberBrowse = () => {
  return axios
    .get(`${API_URL}/members/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getUserFriend = () => {
  return axios
    .get(`${API_URL}/members/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getUserAlbum = () => {
  return axios
    .get(`${API_URL}/albums/browse${API_URL_SUFFIX}`, { headers: headers })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getUserBlog = () => {
  return axios
    .get(`${API_URL}/blogs/browse${API_URL_SUFFIX}`, { headers: headers })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getUserVideo = () => {
  return axios
    .get(`${API_URL}/videos/browse${API_URL_SUFFIX}`, { headers: headers })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getUserMusic = () => {
  return axios
    .get(`${API_URL}/musics/albums/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export default {
  friendRequest,
  addFriend,
  ignoreFriendRequest,
  memberView,
  getProfileInfo,
  getUserFriend,
  getUserAlbum,
  getUserBlog,
  getUserVideo,
  getUserMusic,
  memberBrowse,
};
