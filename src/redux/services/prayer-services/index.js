import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const browsePrayers = () => {
  return axios
    .get(`${API_URL}/sesprayer/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewPrayer = () => {
  return axios
    .get(`${API_URL}/sesprayer/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const searchPrayer = () => {
  return axios
    .get(`${API_URL}/sesprayer/index/browse${API_URL_SUFFIX}`, {
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

const viewPrayerCategory = (data) => {
  return axios
    .post(`${API_URL}/sesprayer/index/browse${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const myPrayer = () => {
  return axios
    .get(`${API_URL}/sesprayer/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deletePrayer = (data) => {
  return axios
    .get(`${API_URL}/sesprayer/index/delete${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const createPrayer = (data) => {
  return axios
    .post(`${API_URL}/sesprayer/index/create${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const editPrayer = (data) => {
  return axios
    .post(`${API_URL}/sesprayer/index/edit${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const prayerLike = (data) => {
  return axios
    .post(`${API_URL}/content/like${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const prayerUnlike = (data) => {
  return axios
    .post(`${API_URL}/content/like${API_URL_SUFFIX}`, data, {
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
  viewPrayer,
  likeComment,
  browsePrayers,
  viewPrayerCategory,
  myPrayer,
  deletePrayer,
  createPrayer,
  prayerLike,
  prayerUnlike,
  searchPrayer,
  editPrayer,
};
