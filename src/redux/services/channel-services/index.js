import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const viewChannel = () => {
  return axios
    .get(`${API_URL}/channels/index${API_URL_SUFFIX}`, {
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

const channelComposer = () => {
  return axios
    .get(`${API_URL}/activity/composer-options${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelFeed = () => {
  return axios
    .get(`${API_URL}/activity/index${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseVideoChannel = () => {
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

const rateChannel = (data) => {
  return axios
    .post(`${API_URL}/videos/rate${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelVideos = (data) => {
  return axios
    .get(`${API_URL}/videos/videos${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteChannelVideos = (data) => {
  return axios
    .get(`${API_URL}/channels/delete-video${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelInfo = (data) => {
  return axios
    .get(`${API_URL}/channels/info${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelPhotos = (data) => {
  return axios
    .get(`${API_URL}/channels/photos${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelComment = (data) => {
  return axios
    .post(`${API_URL}/channels/photos${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelEdit = (data) => {
  return axios
    .post(`${API_URL}/channels/edit${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelFollow = (data) => {
  return axios
    .post(`${API_URL}/channels/follow${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelLike = (data) => {
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

const channelUnlike = (data) => {
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

const channelFavorite = (data) => {
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

const channelDelete = () => {
  return axios
    .post(`${API_URL}/channels/delete${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const channelSearch = (id) => {
  return axios
    .post(`${API_URL}/channels/browse${API_URL_SUFFIX}`, id, {
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
  viewChannel,
  likeComment,
  channelComposer,
  channelFeed,
  browseVideoChannel,
  rateChannel,
  channelVideos,
  deleteChannelVideos,
  channelInfo,
  channelPhotos,
  channelComment,
  channelEdit,
  channelFollow,
  channelLike,
  channelUnlike,
  channelFavorite,
  channelDelete,
  channelSearch,
};
