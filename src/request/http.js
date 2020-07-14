import axios from "axios"
import qs from "querystring"
//环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = '';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = '';
}
//通过axios.defaults.timeout设置默认的请求超时时间。例如超过了5s，就会告知用户当前请求超时，请刷新等。
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//请求拦截器
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
},error=>{
  return Promise.reject(response)
})
//响应拦截器
axios.interceptors.response.use(
    response=>{
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
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

export function get(url,params={}){
    
    return new Promise((resolve,reject) => {
      axios.get(url,{
        params:params
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
  
   export function post(url,data = {}){
     return new Promise((resolve,reject) => {
       axios.post(url,data)
            .then(response => {
              resolve(response.data);
            },err => {
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
  
  export function patch(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.patch(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
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
  
  export function put(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.put(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }