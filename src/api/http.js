import axios from 'axios';
// import qs from 'qs';
import {
  // Loading,
  Message
} from 'element-ui';

// const baseURL = "http://47.96.8.239:8000";
// const baseURL = "http://192.168.1.143:8000";
const baseURL = "/api";
const timeout = 30000; // 超时时间
axios.interceptors.request.use(config => { // 这里的config包含每次请求的内容
  // config.headers['Access-Control-Allow-Headers'] = '*';
  if (sessionStorage.getItem('token')) {
    config.headers.token = `${sessionStorage.getItem('token')}`;
  }
  config.withCredentials = true;
  return config;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.resolve(error.response);
});

function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
  // console.log(response);
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    // console.log(response);
    if (response.data.code === 1) {
      // Message.warning(response.data.msg);
      // setTimeout(() => {
      //   window.location.href = '#/login';
      // }, 1000);
      return {
        status: 300,
        msg: response.data.msg
      };
    } else if (response.data.code === -1) {
      Message.error(response.data.msg);
      return {
        status: 404,
        msg: response.data.msg
      };
    } else if (response.data.code === 0) {
      return response;
    }
  } else {
    // 异常状态下，把错误信息返回去
    return {
      status: 404,
      msg: '网络异常'
    };
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404 || res.status === 300) {
    Message.error(res.msg);
  }
  if (res.status === 300) {
    Message.warning(res.msg);
    setTimeout(() => {
      window.location.href = '#/login';
      sessionStorage.clear();
    }, 1000);
  }
  if (res.data && (!res.data.success)) {
    // alert(res.data.error_msg)
  }
  return res;
}
// 请求方式的配置
export default {
  post(url, data) { //  post
    return axios({
      method: 'post',
      baseURL: baseURL,
      url,
      data: JSON.stringify(data),
      timeout: timeout,
      headers: {
        'Content-Type': "application/json"
      }
    }).then((response) => {
      return checkStatus(response);
    }).then((res) => {
      return checkCode(res);
    });
  },
  get(url, params) { // get
    return axios({
      method: 'get',
      baseURL: baseURL,
      url,
      params, // get 请求时带的参数
      timeout: timeout,
    }).then((response) => {
      return checkStatus(response);
    }).then((res) => {
      return checkCode(res);
    });
  },
  put(url, params) {
    return axios.put(`${baseURL}/${url}`, params, {
      headers: {
        "Content-type": "application/json",
      }
    }).then(response => {
      return checkStatus(response);
    }).then(res => {
      return checkCode(res);
    });
  },
  delete(url, params) { // delete
    return axios({
      method: 'delete',
      baseURL: baseURL,
      url,
      params, // delete 请求时带的参数
      timeout: timeout,
      headers: {
        'Content-Type': "application/json"
      }
    }).then(response => {
      return checkStatus(response);
    }).then(res => {
      return checkCode(res);
    });
  }
};
