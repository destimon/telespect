import { IPeer, IUser, TG_IPeer, TG_IUser } from '../types'

class TG_Helpers {
  constructor() {}

  extractUser(tgUser: TG_IUser): IUser {
    return {
      id: tgUser.user.id,
      username: tgUser.user.username,
      first_name: tgUser.user.first_name,
      last_name: tgUser.user.last_name,
      access_hash: tgUser.user.access_hash,
    }
  }

  extractPeer(tgPeer: TG_IPeer, user_id: number): IPeer {
    return {
      id: tgPeer.user.id,
      user_id,
      username: tgPeer.user.username,
      first_name: tgPeer.user.first_name,
      last_name: tgPeer.user.last_name,
    }
  }
}

export default new TG_Helpers()
