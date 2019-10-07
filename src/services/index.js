import axios from 'axios'

const http = axios.create({
  baseURL: process.env.baseURL
})

http.interceptors.request.use(
  function(config) {
    config.params = {
      APPID: process.env.apiKey
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default {
  getTodaysWheater(id) {
    const url = `/weather?id=${id}`
    return http.get(url)
  }
}
