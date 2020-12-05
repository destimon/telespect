import { AxiosResponse } from 'axios'
import { IPeer, IUser } from '../types'
import { service } from './config'

class API {
  constructor() {}

  endPoint = 'api/'

  /**
   * Users / Peers
   */

  async saveNewUser(user: IUser) {
    try {
      return await service.post(`${this.endPoint}users`, user)
    } catch (err) {
      console.error(err)
    }
  }

  async saveNewPeer(peer: IPeer) {
    try {
      return await service.post(`${this.endPoint}peers`, peer)
    } catch (err) {
      console.error(err)
    }
  }

  async getPeersByUserId(user_id: number) {
    try {
      const response: AxiosResponse = await service.get(`${this.endPoint}peers`)

      return response.data
    } catch (err) {
      console.error(err)
    }
  }
}

export default new API()
