// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/icon/iconfont.css';
import App from './App';
import router from './router';
import createStore from "./store/store";
import axios from './api/http';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);
const store = createStore();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  created() {
    if (sessionStorage.getItem('loginData') === null) {
      sessionStorage.setItem('loginData', '');
    }
    if (sessionStorage.getItem('token') === null) {
      sessionStorage.setItem('token', '');
    }
    this.$store.state.loginData = sessionStorage.getItem('loginData');
    this.$store.state.token = sessionStorage.getItem('token');
  }
});
