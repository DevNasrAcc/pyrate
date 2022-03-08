import axios from "axios";

export const API_URL = "http://pagestd.socialenginesolutions.com";
export const API_URL_SUFFIX = "?restApi=Sesapi&sesapi_platform=1";

const browsePages = () => {
  return axios
    .get(`${API_URL}/sespage/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const createPage = (data) => {
  return axios
    .post(`${API_URL}/sespage/profile/create${API_URL_SUFFIX}`, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deletePage = () => {
  return axios
    .delete(`${API_URL}/sespage/index/delete${API_URL_SUFFIX}`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const menu = () => {
  return axios
    .get(`${API_URL}/sespage/index/menu${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const likePage = (data) => {
  return axios
    .post(`${API_URL}/sespage/index/like${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewPage = () => {
  return axios
    .get(`${API_URL}/sespage/index/view${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const leavePage = (id) => {
  return axios
    .post(`${API_URL}/sespage/index/leave/getForm/${id}${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const pageCategory = () => {
  return axios
    .get(`${API_URL}/sespage/index/categories${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const pageInformation = () => {
  return axios
    .get(`${API_URL}/sespage/index/info${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const editPage = (id, data) => {
  return axios
    .post(
      `${API_URL}/sespage/profile/edit/getForm/${id}${API_URL_SUFFIX}`,
      data,
      {
        headers: headers,
      }
    )
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const managePage = (id) => {
  return axios
    .post(`${API_URL}/sespage/index/manage${API_URL_SUFFIX}`, {
      headers: headers,
      data: id,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const pageMember = () => {
  return axios
    .get(`${API_URL}/sespage/index/member${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const followPage = (id, type) => {
  const data = { id, type };
  return axios
    .post(`${API_URL}/sespage/index/follow${API_URL_SUFFIX}`, data, {
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
  browsePages,
  createPage,
  deletePage,
  menu,
  likePage,
  viewPage,
  pageCategory,
  pageInformation,
  editPage,
  leavePage,
  managePage,
  pageMember,
  followPage,
};
