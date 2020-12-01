import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_API_HOST_URL,
})

export default service
