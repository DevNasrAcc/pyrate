import axios from "axios";

import {API_URL, API_URL_SUFFIX, axiosConfig, axiosUrl} from "../../../apiUrl";

const postGeneralSetting = async () => {
  const oauthToken = localStorage.getItem("oauth_token");
  const sessionId = localStorage.getItem("sessionId");

  let formData = new FormData();
  formData.append('auth_token', oauthToken);
  formData.append('language', null);
  formData.append('getForm', 1);
  formData.append('PHPSESSID', sessionId);

  const url = axiosUrl('/members/settings/general');
  return await axios.post(url, formData, axiosConfig);
};

const privacyForm = (data) => {
  // return axios
  //   .post(`${API_URL}/members/settings/privacy${API_URL_SUFFIX}`, data, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const joinNetwork = (data) => {
  // return axios
  //   .get(`${API_URL}/members/settings/network${API_URL_SUFFIX}`, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const availableNetwork = (data) => {
  // return axios
  //   .get(`${API_URL}/members/settings/network${API_URL_SUFFIX}`, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const leaveNetwork = (data) => {
  // return axios
  //   .post(`${API_URL}/members/settings/network${API_URL_SUFFIX}`, data, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const joinNewNetwork = (data) => {
  // return axios
  //   .post(`${API_URL}/members/settings/network${API_URL_SUFFIX}`, data, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const notificationForm = (data) => {
  // return axios
  //   .post(`${API_URL}/members/settings/notifications${API_URL_SUFFIX}`, data, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const passwordForm = (data) => {
  // return axios
  //   .post(`${API_URL}/members/settings/password${API_URL_SUFFIX}`, data, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const getSettings = () => {
  // return axios
  //   .get(`${API_URL}/sesapi/navigation/settings${API_URL_SUFFIX}`, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const showPrivacy = () => {
  // return axios
  //   .get(`${API_URL}/sesapi/index/privacy${API_URL_SUFFIX}`, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const getTermsConditions = () => {
  // return axios
  //   .get(`${API_URL}/sesapi/index/privacy${API_URL_SUFFIX}`, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

const editProfile = (data) => {
  // return axios
  //   .post(`${API_URL}/sesapi/index/privacy${API_URL_SUFFIX}`, data, {
  //     headers: headers,
  //   })
  //   .then((response) => {
  //     return Promise.resolve(response.data);
  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response);
  //   });
};

export default {
  postGeneralSetting,
  privacyForm,
  joinNetwork,
  availableNetwork,
  leaveNetwork,
  joinNewNetwork,
  notificationForm,
  passwordForm,
  getSettings,
  showPrivacy,
  getTermsConditions,
  editProfile,
};
