import axios from 'axios'
import URL from './url'
const api = {}

const instance = axios.create({
  baseURL: URL.baseURL
})

instance.interceptors.request.use(function (config) {
  return config
})

instance.interceptors.response.use(function (response) {
  return response
})

api.get = function (url, params = {}, config = {}) {
  return instance({
    method: 'GET',
    url,
    params,
    ...config
  })
}

api.post = function (url, data = {}, config = {}) {
  return instance({
    method: 'POST',
    url,
    data,
    ...config
  })
}

export default api
//
// function serialize (data) {
//   if (!data) return ''
//   var pairs = [], value
//   for (var name in data) {
//     if (!data.hasOwnProperty(name)) continue
//     if (typeof data[name] === 'function') continue
//     value = data[name].toString()
//     name = encodeURI(name)
//     value = encodeURI(value)
//     pairs.push(name + '=' + value)
//   }
//   if (pairs.length) {
//     return '?' + pairs.join('&')
//   } else {
//     return ''
//   }
// }
