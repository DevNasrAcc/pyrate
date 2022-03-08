import axios from "axios";

import { API_URL, API_URL_SUFFIX, headers } from "../../../apiUrl";

const messageInbox = () => {
  return axios
    .get(`${API_URL}/messages/inbox/${API_URL_SUFFIX}`, {
      headers: headers,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const messageSent = (data) => {
  return axios
    .post(`${API_URL}/messages/sent${API_URL_SUFFIX}`, data, {
      headers: headers,
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

const messageView = () => {
  return axios
    .get(`${API_URL}/messages/view${API_URL_SUFFIX}`, {
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
  messageInbox,
  messageSent,
  messageView,
};
