import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const subCategory = (data) => {
  return axios
    .post(`${API_URL}/sesapi/index/subcategory${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const subSubCategory = (data) => {
  return axios
    .post(`${API_URL}/sesarticle/index${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const submitReport = (data) => {
  return axios
    .post(`${API_URL}/report/create${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const likeComment = (data) => {
  return axios
    .post(`${API_URL}/comment-like${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const likeAlbumCommon = (data) => {
  return axios
    .get(`${API_URL}/comments${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const favouriteAlbumCommon = (data) => {
  return axios
    .post(`${API_URL}/content/favourite${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const shareOnFeed = (data) => {
  return axios
    .post(`${API_URL}/activity/feed/share${API_URL_SUFFIX}`, data, {
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
  subCategory,
  subSubCategory,
  submitReport,
  favouriteAlbumCommon,
  likeAlbumCommon,
  likeComment,
  shareOnFeed,
};
