import axios from 'axios'

const http = axios.create({
  baseURL: process.env.baseURL
})

http.interceptors.request.use(
  function(config) {
    config.params = {
      APPID: process.env.apiKey,
      units: 'metric'
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default {
  async getTodaysWheater(id) {
    const url = `/weather?id=${id}`
    const responseGet = await http.get(url)
    return responseGet.data
  }
}
