import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const listNotifications = () => {
  return axios
    .get(`${API_URL}/sesapi/navigation/notification/${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const notificationRead = (data) => {
  return axios
    .post(`${API_URL}/sesapi/navigation/mark-read${API_URL_SUFFIX}`, data, {
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
  listNotifications,
  notificationRead,
};
