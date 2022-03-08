import axios from "axios";
import { headers } from "../../../apiUrl";

export const API_URL = "http://pagestd.socialenginesolutions.com";
export const API_URL_SUFFIX = "?restApi=Sesapi&sesapi_platform=1";

const browseContest = () => {
  return axios
    .get(`${API_URL}/sescontest/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewContest = () => {
  return axios
    .get(`${API_URL}/sescontest/contest/view${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const createContest = (data) => {
  return axios
    .post(`${API_URL}/sescontest/contest/create${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteContest = (id) => {
  const data = { id };
  return axios
    .delete(`${API_URL}/sescontest/contest/delete${API_URL_SUFFIX}`, {
      headers: headers,
      data,
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
    .get(`${API_URL}/sescontest/index/menus${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const favouriteContest = (data) => {
  return axios
    .post(`${API_URL}/sescontest/contest/favourite${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const leaveContest = (data) => {
  return axios
    .post(`${API_URL}/sescontest/join/delete${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const contestCategory = () => {
  return axios
    .get(`${API_URL}/sescontest/index/category${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const editContest = (data) => {
  return axios
    .post(`${API_URL}/sescontest/contest/edit${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const likeConest = (body) => {
  const data = { body };
  return axios
    .post(`${API_URL}/sescontest/contest/like${API_URL_SUFFIX}`, {
      headers: headers,
      data,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export default {
  browseContest,
  createContest,
  deleteContest,
  menu,
  favouriteContest,
  viewContest,
  contestCategory,
  editContest,
  leaveContest,
  likeConest,
};
