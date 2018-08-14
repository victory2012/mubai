import axios from "axios";
// import _ from "lodash";
import {
  // Loading,
  Message
} from 'element-ui';

axios.interceptors.request.use(config => {
  // loadinginstace = Loading.service({ fullscreen: true });
  if (sessionStorage.getItem('token')) {
    config.headers.token = `${sessionStorage.getItem('token')}`;
  }
  config.withCredentials = true;
  return config;
}, (error) => {
  // loadinginstace.close();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error);
});
axios.interceptors.response.use((response) => {
  console.log(response);
  if (response.data.code !== 0) {
    Message.error({
      message: response.data.msg
    });
    // setTimeout(() => {
    //   window.location.href = "/login";
    // }, 1000);
  } else {
    response.headers.token && sessionStorage.setItem('token', response.headers.token);
  }
  return response.data;
}, (error) => {
  // loadinginstace.close();
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(error);
});

export default axios;
