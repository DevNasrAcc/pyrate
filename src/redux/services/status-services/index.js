import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const videoUrlValidation = (url) => {
  return axios
    .post(`${API_URL}/videos/create/${API_URL_SUFFIX}`, url, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const statusPost = (data) => {
  return axios
    .post(`${API_URL}/activity/post/index${API_URL_SUFFIX}`, data, {
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
  videoUrlValidation,
  statusPost,
};
