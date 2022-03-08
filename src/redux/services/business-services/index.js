import axios from "axios";
import { headers } from "../../../apiUrl";

export const API_URL = "http://pagestd.socialenginesolutions.com";
export const API_URL_SUFFIX = "?restApi=Sesapi&sesapi_platform=1";

const browseBusiness = () => {
  return axios
    .get(`${API_URL}/sesbusiness/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewBusiness = () => {
  return axios
    .get(`${API_URL}/sesbusiness/contest/view${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const createBusiness = (data) => {
  return axios
    .post(`${API_URL}/sesbusiness/profile/create${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteBusiness = (id) => {
  const data = { id };
  return axios
    .delete(`${API_URL}/sesbusiness/index/delete${API_URL_SUFFIX}`, {
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

const favouriteBusiness = (data) => {
  return axios
    .post(`${API_URL}/sesbusiness/index/favourite${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const businessCategory = () => {
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

const editBusiness = (data) => {
  return axios
    .post(`${API_URL}/sesbusiness/profile/edit${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const businessInformation = () => {
  return axios
    .get(`${API_URL}/sesbusiness/index/info${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const businessMember = () => {
  return axios
    .get(`${API_URL}/sesbusiness/index/member${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const likeBusiness = (id, type) => {
  const data = { id, type };
  return axios
    .post(`${API_URL}/sesbusiness/index/like${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const followBusiness = (id, type) => {
  const data = { id, type };
  return axios
    .post(`${API_URL}/sesbusiness/index/follow${API_URL_SUFFIX}`, data, {
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
  browseBusiness,
  createBusiness,
  deleteBusiness,
  menu,
  favouriteBusiness,
  viewBusiness,
  businessCategory,
  editBusiness,
  businessInformation,
  businessMember,
  likeBusiness,
  followBusiness,
};
