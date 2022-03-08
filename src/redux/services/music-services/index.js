import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const browseAlbum = () => {
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

const rateMusicAlbum = (data) => {
  return axios
    .post(`${API_URL}/musics/albums/rate${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const albumLike = (data) => {
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

const albumFavorite = (data) => {
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

const songFavorite = (data) => {
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

const addToPlayList = (data) => {
  return axios
    .post(`${API_URL}/musics/songs/append${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const albumView = () => {
  return axios
    .get(`${API_URL}/musics/songs/album-view${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getAlbumComments = (data) => {
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

const searchAlbum = () => {
  return axios
    .get(`${API_URL}/musics/albums/browse${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseSongs = () => {
  return axios
    .get(`${API_URL}/musics/songs/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const commentLike = (data) => {
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

const contentLike = (data) => {
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

const songComment = (data) => {
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

const addSongToPlatylist = (data) => {
  return axios
    .post(`${API_URL}/musics/songs/append${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const getSongLyrics = () => {
  return axios
    .get(`${API_URL}/musics/songs/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const searchSongs = (data) => {
  return axios
    .get(`${API_URL}/musics/songs/browse${API_URL_SUFFIX}`, data, {
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
    .get(`${API_URL}/musics/playlists/browse${API_URL_SUFFIX}`, {
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
    .get(`${API_URL}/musics/songs/playlist-view${API_URL_SUFFIX}`, data, {
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

const editPlaylist = (data) => {
  return axios
    .post(`${API_URL}/musics/songs/edit-playlist${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const searchPlaylist = (data) => {
  return axios
    .get(`${API_URL}/musics/playlists/browse${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseMusicArtist = () => {
  return axios
    .get(`${API_URL}/musics/artists/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewArtist = (data) => {
  return axios
    .get(`${API_URL}/musics/songs/artist-view${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const myAlbums = (data) => {
  return axios
    .get(`${API_URL}/musics/albums/browse${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const myPlaylist = () => {
  return axios
    .get(`${API_URL}/musics/playlists/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteMyPlaylist = (data) => {
  return axios
    .delete(`${API_URL}/musics/playlists/delete${API_URL_SUFFIX}`, data, {
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
  browseAlbum,
  addToPlayList,
  albumView,
  getAlbumComments,
  searchAlbum,
  rateMusicAlbum,
  browseSongs,
  commentLike,
  contentLike,
  songComment,
  addSongToPlatylist,
  getSongLyrics,
  albumLike,
  searchSongs,
  songFavorite,
  browsePlaylist,
  viewPlaylist,
  playlistFavorite,
  editPlaylist,
  searchPlaylist,
  browseMusicArtist,
  viewArtist,
  myAlbums,
  myPlaylist,
  deleteMyPlaylist,
  albumFavorite,
};
