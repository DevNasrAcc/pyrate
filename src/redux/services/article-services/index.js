import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const browseArticles = () => {
  return axios
    .get(`${API_URL}/articles/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewArticle = (data) => {
  return axios
    .get(`${API_URL}/channels/index${API_URL_SUFFIX}`, data, {
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

const getArticleComment = (data) => {
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

const getArticleCategory = () => {
  return axios
    .get(`${API_URL}/articles/category${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewArticleCategory = (data) => {
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

const myArticle = () => {
  return axios
    .get(`${API_URL}/articles/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteArticle = (data) => {
  return axios
    .get(`${API_URL}/sesarticle/index/delete${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const createArticle = (data) => {
  return axios
    .post(`${API_URL}/articles/create${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const editArticle = (data) => {
  return axios
    .post(`${API_URL}/articles/create${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const articleLike = (data) => {
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

const articleUnlike = (data) => {
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

const articleFavorite = (data) => {
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

export default {
  viewArticle,
  likeComment,
  getArticleComment,
  getArticleCategory,
  browseArticles,
  viewArticleCategory,
  myArticle,
  deleteArticle,
  createArticle,
  articleLike,
  articleUnlike,
  articleFavorite,
  editArticle,
};
