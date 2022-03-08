import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const postFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/index${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const saveFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/save${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const unsaveFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/save${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const hideFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/hidden${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const unhideFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/hidden${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/delete${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const enableFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/comment${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const disableFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/comment${API_URL_SUFFIX}`, data, {
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
  postFeed,
  saveFeed,
  unsaveFeed,
  hideFeed,
  unhideFeed,
  deleteFeed,
  enableFeed,
  disableFeed,
};
