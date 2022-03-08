export const API_URL = "https://pyrate.app";
export const API_URL_SUFFIX =
  "?restApi=Sesapi&sesapi_version=2.3&sesapi_platform=2&language=en";

// export const headers = {
//   connection: "Keep-Alive",
//   "content-length": "341",
//   "content-type": "application/x-www-form-urlencoded",
//   cookie: "PHPSESSID=gk2mljk048vs799pfqrr1je897;",
//   host: "pyrate.app",
//   "Access-Control-Allow-Credentials" : true,
// };

// export const axiosConfig = (type, dataset, endpoint) => {
//   return {
//     method: type,
//     url: `${API_URL}${endpoint}${API_URL_SUFFIX}`,
//     headers: headers,
//     data : dataset
//   };
// };

const sessionId = localStorage.getItem("sessionId") ? localStorage.getItem("sessionId") : "";

export const axiosConfig = {
  headers: {
    // "content-type": "multipart/form-data",
    // "connection": "Keep-Alive",
    // "content-length": "341",
    // "cookie": `PHPSESSID=`,
    // "host": "pyrate.app",
    "content-type": "application/x-www-form-urlencoded",
    // "Access-Control-Allow-Credentials" : true,
  }
};

export const axiosUrl = (endpoint) => {
  return `${API_URL}${endpoint}${API_URL_SUFFIX}`;
};
