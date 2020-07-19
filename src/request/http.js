import axios from "axios"
import store from '@/store/index.js'
//通过axios.defaults.timeout设置默认的请求超时时间。例如超过了5s，就会告知用户当前请求超时，请刷新等。
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//请求拦截器
let ajaxTimes = 0
axios.interceptors.request.use(config => {
  ajaxTimes++
  store.commit('showLoading')
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
}, error => {
  store.commit('hideLoading')
  return Promise.reject(response)
})
//响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      ajaxTimes--
      console.log(ajaxTimes)
      if (ajaxTimes == 0) {
        store.commit('hideLoading')
      }
      return Promise.resolve(response);
    } else {
      store.commit('hideLoading')
      return Promise.reject(response);
    }
  }
)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}