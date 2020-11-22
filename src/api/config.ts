import axios from 'axios'

console.log(process.env.REACT_APP_API_HOST_URL)

const service = axios.create({
  baseURL: process.env.REACT_APP_API_HOST_URL,
})

export default service
