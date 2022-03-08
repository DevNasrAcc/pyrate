import axios from "axios";

export const API_URL = "http://pagestd.socialenginesolutions.com";
export const API_URL_SUFFIX = "?restApi=Sesapi&sesapi_platform=1";

const createGroup = (data) => {
  return axios
    .post(`${API_URL}/sesgroup/profile/create${API_URL_SUFFIX}`, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteGroup = () => {
  return axios
    .delete(`${API_URL}/sesgroup/index/delete${API_URL_SUFFIX}`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseGroup = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const menu = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/menu${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseFeatured = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseAlbum = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/browsealbum${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const browseCategories = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/view${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const groupInformation = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/info${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const groupAlbums = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/album${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const groupMembers = () => {
  return axios
    .get(`${API_URL}/sesgroup/index/member${API_URL_SUFFIX}`, {
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
  createGroup,
  deleteGroup,
  menu,
  browseFeatured,
  browseAlbum,
  browseCategories,
  groupInformation,
  groupAlbums,
  groupMembers,
  browseGroup,
};
