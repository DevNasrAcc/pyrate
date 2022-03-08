import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const browseVideos = () => {
  return axios
    .get(`${API_URL}/videos/browse${API_URL_SUFFIX}`, {
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

const viewVideo = (data) => {
  return axios
    .get(`${API_URL}/videos/view${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const likeVideo = (data) => {
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

const videoFavorite = (data) => {
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

const watchLater = (data) => {
  return axios
    .post(`${API_URL}/videos/watch${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const searchVideo = () => {
  return axios
    .get(`${API_URL}/videos/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const addToPlayList = (data) => {
  return axios
    .post(`${API_URL}/videos/playlists/create${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteVideos = (data) => {
  return axios
    .get(`${API_URL}/videos/delete${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const createVideo = (data) => {
  return axios
    .post(`${API_URL}/videos/edit${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const editVideo = (data) => {
  return axios
    .post(`${API_URL}/videos/playlists/browse${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browsePlaylist = () => {
  return axios
    .get(`${API_URL}/videos/playlists/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const likePlaylist = (data) => {
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

const unlikePlaylist = (data) => {
  return axios
    .put(`${API_URL}/content/like${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const playlistFavorite = (data) => {
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

const viewPlaylist = (data) => {
  return axios
    .post(`${API_URL}/videos/playlists/view${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const editPlaylist = (data) => {
  return axios
    .post(`${API_URL}/videos/playlists/edit${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deletePlaylist = (data) => {
  return axios
    .post(`${API_URL}/videos/playlists/delete${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseVideoArtist = () => {
  return axios
    .get(`${API_URL}/videos/artists/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const artistFavorite = (data) => {
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

const getArtistVideo = (data) => {
  return axios
    .post(`${API_URL}/videos/browse${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getMyVidoes = () => {
  return axios
    .get(`${API_URL}/videos/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getMyChannel = () => {
  return axios
    .get(`${API_URL}/channels/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getMyPlaylist = () => {
  return axios
    .get(`${API_URL}/videos/playlists/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getSelectedCategory = () => {
  return axios
    .get(`${API_URL}/videos/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getVideoCategory = () => {
  return axios
    .get(`${API_URL}/videos/category${API_URL_SUFFIX}`, {
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
  browseVideos,
  likeComment,
  viewVideo,
  likeVideo,
  watchLater,
  searchVideo,
  addToPlayList,
  deleteVideos,
  browsePlaylist,
  likePlaylist,
  unlikePlaylist,
  playlistFavorite,
  viewPlaylist,
  editPlaylist,
  deletePlaylist,
  videoFavorite,
  browseVideoArtist,
  artistFavorite,
  getArtistVideo,
  getMyVidoes,
  getMyChannel,
  getMyPlaylist,
  getVideoCategory,
  createVideo,
  editVideo,
  getSelectedCategory,
};
