import { AxiosResponse } from 'axios'
import { IUser } from '../types'
import service from './config'

class API {
  constructor() {}

  endPoint = 'api/'

  /**
   * Users
   */

  async addNewUser(user: IUser) {
    try {
      const response: AxiosResponse = await service.post(`${this.endPoint}users`, user)

      return response
    } catch (err) {
      console.error(err)
    }
  }

  async getAllUsers() {
    try {
      const response: AxiosResponse = await service.get(`${this.endPoint}users`)

      return response.data
    } catch (err) {
      console.error(err)
    }
  }
}

export default new API()
