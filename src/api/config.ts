import axios from 'axios'

export const service = axios.create({
  baseURL: process.env.REACT_APP_API_HOST_URL,
})

export const ext_service = axios.create({
  baseURL: process.env.REACT_EXTERNAL_CONNECTION_HOST_URL,
})
