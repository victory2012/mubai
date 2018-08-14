import axios from "./config";
// import axios from "axios";
const baseURL = "http://192.168.1.143:8080";
// axios.defaults.withCredentials = true; // 让ajax携带cookie

// let instance = axios.create({
//   headers: {
//     "Content-Type": "application/json"
//   },
//   baseURL: 'http://192.168.1.143:8080',
//   timeout: 30000,
//   withCredentials: true
// // });

/* 登录 */
export const getAdminInfo = (params) => {
  return axios.post(`${baseURL}/login`, params);
  // return axios({
  //   method: "post",
  //   url: "/login",
  //   data: params
  // });
};
/* 登出 */
export const doLogOut = () => {
  return axios.post(`${baseURL}/login/logout`);
};
/* 获取用户信息 */
export const userInfo = () => {
  return axios.get(`${baseURL}/user/current`);
};

/* 修改用户信息 */
export const changeUserInfo = (params) => {
  return axios.put(`${baseURL}/user/info`, params);
};
/* 查询用户列表 */
export const userList = (params) => {
  return axios.get(`${baseURL}/user`, params);
};

/* 添加用户 */
export const addUser = (params) => {
  return axios.post(`${baseURL}/user`, params);
};

/* 删除用户 */
export const deleteUser = (id) => {
  return axios.post(`${baseURL}/user/${id}`);
};
