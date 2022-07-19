import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

// 泛型接口,T的类型支持
export interface IResponseData<T = any> {
  code: number
  message: string
  data: T
}

const axiosInstance = axios.create({
  baseURL: '/monitor',
})
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 通用的请求函数
export async function request<T>(config: AxiosRequestConfig) {
  return axiosInstance
    .request<IResponseData<T>>(config)
    .then(res => res.data.data)
}

export { axiosInstance }
export default request
