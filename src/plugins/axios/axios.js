import Vue from 'vue'
import * as axios from 'axios'
import _ from 'lodash'
import Cookie from 'js-cookie'

let options = {
  timeout: 300000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
};
let axiosInstance = axios.create(options);
axiosInstance.interceptors.request.use((config)=> {
  if(!config.params) {
    config.params = {};
  }
  if(Cookie.get('token')) {
    config.headers.userToken = Cookie.get('token');
  }
  config.params._ = Date.now();
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response)=> {
  if (response.data.code == 403) { //登录过期调整登录
    _ws.router.push({path: '/'});
  }
  return response;
}, (error)=> {
  // let [url, statusCode, statusText] = [error.config.url, error.response.status, error.response.statusText];
  if(statusCode == 404) {
    _ws.router.push({path: '/404'});
  } else if (statusCode >= 500) {
    if (_ws['loading']) {
      _ws['loading'].close();
    }
    _ws.router.push({path: '/error/500'});
  }
  return Promise.reject(error.message);
});

export default axiosInstance;
