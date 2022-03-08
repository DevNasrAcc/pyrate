import axios from "axios";

export const API_URL = "http://pagestd.socialenginesolutions.com";
export const API_URL_SUFFIX = "?restApi=Sesapi&sesapi_platform=1";

const browseEvent = () => {
  return axios
    .get(`${API_URL}/sesevent/index/browse${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const myEvent = () => {
  return axios
    .get(`${API_URL}/sesevent/index/manageevents${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const viewEvent = () => {
  return axios
    .get(`${API_URL}/sesevent/index/eventview${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const createEvent = (data) => {
  return axios
    .post(`${API_URL}/sesevent/index/create${API_URL_SUFFIX}`, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const deleteEvent = (id) => {
  const data = { id };
  return axios
    .delete(`${API_URL}/sesevent/index/delete${API_URL_SUFFIX}`, data)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const menu = () => {
  return axios
    .get(`${API_URL}/sesevent/index/menus${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const favouriteEvent = (id, type) => {
  const data = { id, type };
  return axios
    .post(`${API_URL}/sesevent/index/favourite${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const leaveEvent = (id) => {
  const data = {
    id,
  };
  return axios
    .post(`${API_URL}/sesevent/member/leave${API_URL_SUFFIX}`, {
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

const eventCategory = () => {
  return axios
    .get(`${API_URL}/sesevent/index/browsecategories${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const eventInformation = () => {
  return axios
    .get(`${API_URL}/sesevent/index/eventinfo${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const editEvent = (data) => {
  return axios
    .post(`${API_URL}/sesevent/index/edit${API_URL_SUFFIX}`, data, {
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
  browseEvent,
  myEvent,
  createEvent,
  deleteEvent,
  menu,
  favouriteEvent,
  viewEvent,
  eventCategory,
  eventInformation,
  editEvent,
  leaveEvent,
};
