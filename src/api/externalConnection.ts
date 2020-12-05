import { service } from './config'

class EXT_CONNECTION {
  endPoint = '/'

  /**
   * Connection
   */

  async getConnection(id: string) {
    try {
      return await service.get(`${this.endPoint}connections/${id}`)
    } catch (err) {
      console.error(err)
    }
  }
}

export default new EXT_CONNECTION()
