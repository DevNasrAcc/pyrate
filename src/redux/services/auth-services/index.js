import axios from "axios";
import {axiosConfig, axiosUrl} from "../../../apiUrl";
import uuid from "react-uuid";

const register = async (user_name, email, password, confirm_password) => {
  // const config = axiosConfig("post", data, "/signup");
  //
  // return axios(config);

  let config = {
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // }
    headers: {
      "content-type": "multipart/form-data",
      "connection": "Keep-Alive",
      "content-length": "341",
      "cookie": `PHPSESSID=`,
      "host": "pyrate.app",
      // "content-type": "application/x-www-form-urlencoded",
      // "Access-Control-Allow-Credentials" : true,
    }
  };

  let url = 'https://pyrate.app/signup?restApi=Sesapi&sesapi_version=2.3&sesapi_platform=2&language=en';
  // let url = 'http://localhost:8010/signup?restApi=Sesapi&sesapi_version=2.3&sesapi_platform=2&language=en';

  // Get Signup Form 1
  let getForm1 = new FormData();
  getForm1.append('auth_token', "");
  getForm1.append('getForm', "account");
  const resForm1 = await axios.post(url, getForm1, config);

  const sessionId = resForm1.data.session_id;
  localStorage.setItem("sessionId", resForm1.data.session_id);

  // axiosConfig.headers.cookie = `PHPSESSID=${resForm1.data.session_id}`;
  config.headers.cookie = `PHPSESSID=${resForm1.data.session_id};`;

  // Submit Signup Form 1
  let formData = new FormData();
  formData.append('username', user_name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('passconf', confirm_password);
  formData.append('validateAccountForm', 1);
  formData.append('profile_type', 1);
  formData.append('terms', 1);
  formData.append('PHPSESSID', sessionId);
  const form1Res = await axios.post(url, formData, config);

  // Get Signup Form 2
  let getForm2 = new FormData();
  getForm2.append('auth_token', "");
  getForm2.append('getForm', "fields");
  getForm2.append('PHPSESSID', sessionId);
  const resForm2 = await axios.post(url, getForm2, config);

  // Submit Signup Form 2
  const resForm2Fields = resForm2.data.result.formFields;
  let submitForm2 = new FormData();
  submitForm2.append(resForm2Fields[0].name, "ABC");
  submitForm2.append(resForm2Fields[1].name, "XYZ");
  submitForm2.append("validateFieldsForm", 1);
  submitForm2.append('PHPSESSID', sessionId);
  const form2Res = await axios.post(url, submitForm2, config);

  // const headers = {
  //     'connection': 'Keep-Alive',
  //     'content-length': '464',
  //     'content-type': 'multipart/form-data; boundary=MajpVAwz-ZE1P5fhf23jSULQTCarAk',
  //     'cookie': `PHPSESSID=${resForm1.data.session_id};`,
  //     'host': 'pyrate.app'
  // };
  //
  // // Skip Profile Pic
  // let formDataPic = new FormData();
  // formDataPic.append('device_uuid', "fd5jls62Olg:APA91bGu4SipE4HQLeqP6w2LSeSIn7bNZr19lA2Nk4ZljVJV5OGY4Lzl25bC11-7h8Vl_AQ8lFMEL4tu1FvrbZd9XukXahLxCAFZFAPnG3fJagRxjPkaBHKiT43XPEZXlprHGb4Vfaeu");
  // formDataPic.append('auth_token', "");
  // formDataPic.append('validatePhotoForm', 1);
  // formDataPic.append('PHPSESSID', sessionId);
  // const registered = await axios.post(url, formDataPic, headers);

  var data = '--MajpVAwz-ZE1P5fhf23jSULQTCarAk\r\nContent-Disposition: form-data; name="device_uuid"\r\n\r\nfd5jls62Olg:APA91bGu4SipE4HQLeqP6w2LSeSIn7bNZr19lA2Nk4ZljVJV5OGY4Lzl25bC11-7h8Vl_AQ8lFMEL4tu1FvrbZd9XukXahLxCAFZFAPnG3fJagRxjPkaBHKiT43XPEZXlprHGb4Vfaeu\r\n--MajpVAwz-ZE1P5fhf23jSULQTCarAk\r\nContent-Disposition: form-data; name="auth_token"\r\n\r\n\r\n--MajpVAwz-ZE1P5fhf23jSULQTCarAk\r\nContent-Disposition: form-data; name="validatePhotoForm"\r\n\r\n1\r\n--MajpVAwz-ZE1P5fhf23jSULQTCarAk--\r\n';

  var conf = {
    method: 'post',
    url: 'https://pyrate.app/signup?restApi=Sesapi&sesapi_version=2.3&sesapi_platform=2&language=en',
    headers: {
      'connection': 'Keep-Alive',
      'content-length': '464',
      'content-type': 'multipart/form-data; boundary=MajpVAwz-ZE1P5fhf23jSULQTCarAk',
      'cookie': `PHPSESSID=${resForm1.data.session_id}; PHPSESSID=${resForm1.data.session_id}; en4_language=en; en4_locale=en`,
      'host': 'pyrate.app'
    },
    data : data
  };

  axios(conf)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


  // axios.post(url, data, config)
  //     .then(response => {
  //       if (!response.data.error) {
  //         let abcData = new FormData();
  //         abcData.append('auth_token', "");
  //         abcData.append('getForm', "fields");
  //         axios.post(url, abcData, config)
  //             .then(response => {
  //               if (!response.data.error) {
  //                 let formData = new FormData();
  //                 formData.append('debug', 1);
  //                 formData.append('validatePhotoForm', 1);
  //
  //                 const aconfig = {
  //                   headers: {
  //                     'Content-Type': 'multipart/form-data; boundary=MajpVAwz-ZE1P5fhf23jSULQTCarAk',
  //                   }
  //                 };
  //
  //                 axios.post(url, formData, aconfig)
  //                     .then(response => {
  //                       if (response.data.error) {
  //                       }
  //                     }).catch(err => {
  //                 });
  //               }
  //             }).catch(err => {
  //         });
  //       }
  //     }).catch(err => {
  // });

      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });


  // return axios.post(`${API_URL}/signup${API_URL_SUFFIX}`, data, {
  //   headers: headers,
  // });
};

const login = async (email, password) => {
  let formData = new FormData();
  formData.append('auth_token', '');
  formData.append('email', email);
  formData.append('password', password);
  formData.append('device_uuid', "fd5jls62Olg:APA91bGu4SipE4HQLeqP6w2LSeSIn7bNZr19lA2Nk4ZljVJV5OGY4Lzl25bC11-7h8Vl_AQ8lFMEL4tu1FvrbZd9XukXahLxCAFZFAPnG3fJagRxjPkaBHKiT43XPEZXlprHGb4Vfaeu");

  const url = axiosUrl('/members/auth/login');
  const response = await axios.post(url, formData, axiosConfig);

  localStorage.setItem("oauth_token", response.data.aouth_token);
  localStorage.setItem("user", JSON.stringify(response.data));
  localStorage.setItem("sessionId", response.data.session_id);
  return response;
};

const logout = async () => {
  let formData = new FormData();
  formData.append('auth_token', '');
  formData.append('language', null);

  const url = axiosUrl('/logout');
  const response = await axios.post(url, formData, axiosConfig);

  localStorage.removeItem("oauth_token");
  localStorage.removeItem("sessionId");
  localStorage.removeItem("user");
  return response;
};

export default {
  register,
  login,
  logout,
};
