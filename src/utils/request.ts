import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
// 引入消息提示
import { message } from 'ant-design-vue'
// 引入类型
import { Options } from '@/types'
const instance: AxiosInstance = axios.create({
  baseURL: process.env?.VUE_BASE_URL,
  timeout: 3000
})
// 判断状态吗
function judgeStatus(status: number) {
  switch (status) {
    default:
      message.info('')
      break
  }
}
// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (err: AxiosError) => Promise.reject(err)
)
// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (err: AxiosError) => {
    if (err.response) {
      return judgeStatus(err.response.status)
    }
    return Promise.reject(err)
  }
)
export default (options: Options): Promise<any> => {
  return instance({
    ...options
  })
}
