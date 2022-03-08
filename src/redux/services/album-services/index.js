import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const createAlbum = (data) => {
  return axios
    .post(`${API_URL}/sesgroup/index/createalbum${API_URL_SUFFIX}`, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteAlbum = (index) => {
  return axios
    .delete(`${API_URL}/sesgroup/${index}/deletealbum${API_URL_SUFFIX}`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const albumBrowse = () => {
  return axios
    .get(`${API_URL}/albums/browse-photo${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const albumPhotos = () => {
  return axios
    .get(`${API_URL}/albums/browse-photo${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseAlbumCategory = () => {
  return axios
    .get(`${API_URL}/albums/categories/cat${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const albumView = (id) => {
  return axios
    .get(`${API_URL}/album/view/${id}${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const myAlbums = () => {
  return axios
    .get(`${API_URL}/albums/manage${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const albumSearch = () => {
  return axios
    .get(`${API_URL}/albums/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const albumComment = (data) => {
  return axios
    .post(`${API_URL}/comments${API_URL_SUFFIX}`, data, {
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
  createAlbum,
  deleteAlbum,
  albumPhotos,
  albumBrowse,
  browseAlbumCategory,
  albumView,
  albumSearch,
  albumComment,
  myAlbums,
};
