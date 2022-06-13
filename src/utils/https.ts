import axios from 'axios'
import qs from 'qs'
// import { debounce } from './debounce'

type OptionParams = {
  url: string
  method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
  data?: object
  contentType?: 'json' | 'urlencoded' | 'multipart'
  prefixUrl?: string
  options?: any
  isDelProd?: boolean
}

const contentTypes = {
  json: 'application/json; charset=utf-8',
  urlencoded: 'application/x-www-form-urlencoded; charset=utf-8',
  multipart: 'multipart/form-data',
}

// function toastMsg() {
//   Object.keys(errorMsgObj).map((item) => {
//     // Message.error(item)
//     delete errorMsgObj[item]
//   })
// }

const errorMsgObj = {}

const defaultOptions = {
  withCredentials: false, // 允许把cookie传递到后台
  headers: {
    Accept: 'application/json',
    'Content-Type': contentTypes.json,
  },
  timeout: 15000,
}

const https = ({
  url,
  data = {},
  method = 'GET',
  options = {},
  contentType = 'json', // json || urlencoded || multipart
  prefixUrl = '',
  isDelProd = false,
}: OptionParams) => {
  const isDev = import.meta.env.MODE === 'development'
  if (!url) {
    const error = new Error('请传入url')
    return Promise.reject(error)
  }
  if (isDelProd && !isDev) {
    url = url.replace(/^\/.*?\//, '/')
  }
  !isDev ? prefixUrl : (prefixUrl = '')
  const fullUrl = `/${prefixUrl}${url}`
  const newOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      'Content-Type':
        (options.headers && options.headers['Content-Type']) || contentTypes[contentType],
    },
    method,
  }
  if (method === 'GET') {
    newOptions.params = data
  }

  if (method !== 'GET' && method !== 'HEAD') {
    newOptions.data = data
    if (data instanceof FormData) {
      newOptions.headers = {
        'x-requested-with': 'XMLHttpRequest',
        'cache-control': 'no-cache',
      }
    } else if (newOptions.headers['Content-Type'] === contentTypes.urlencoded) {
      newOptions.data = qs.stringify(data)
    } else {
      Object.keys(data).forEach((item) => {
        if (data[item] === null || data[item] === undefined || data[item] === '') {
          delete data[item]
        }
      })
      // 没有必要，因为axios会将JavaScript对象序列化为JSON
      // newOptions.data = JSON.stringify(data);
    }
  }

  axios.interceptors.request.use((request: any) => {
    // 移除起始部分 / 所有请求url走相对路径
    request.url = request.url.replace(/^\//, '')
    return request
  })

  return axios({
    url: fullUrl,
    ...newOptions,
  })
    .then((response) => {
      const { data } = response
      if (data.code === 'xxx') {
        // 与服务端约定
        // 登录校验失败
      } else if (data.code === 'xxx') {
        // 与服务端约定
        // 无权限
        // router.replace({ path: '/403' })
      } else if (data.code === 1 || data.success) {
        // 与服务端约定
        return Promise.resolve(data)
      } else if (data) {
        //接口临时设置 todo
        return Promise.resolve(data)
      } else {
        const { message } = data
        if (!errorMsgObj[message]) {
          errorMsgObj[message] = message
        }
        // setTimeout(debounce(toastMsg, 1000, true, this), 1000)
        return Promise.reject(data)
      }
    })
    .catch((error) => {
      if (error.response) {
        const { data } = error.response
        const resCode = data.status
        const resMsg = data.message || '服务异常'
        // if (resCode === 401) { // 与服务端约定
        //     // 登录校验失败
        // } else if (data.code === 403) { // 与服务端约定
        //     // 无权限
        //     router.replace({ path: '/403' })
        // }
        if (!errorMsgObj[resMsg]) {
          errorMsgObj[resMsg] = resMsg
        }
        // setTimeout(debounce(toastMsg, 1000, true, this), 1000)
        const err = { code: resCode, respMsg: resMsg }
        return Promise.reject(err)
      } else {
        const err = { type: 'canceled', respMsg: '数据请求超时' }
        return Promise.reject(err)
      }
    })
}

export default https
