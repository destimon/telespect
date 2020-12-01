import { MTProto } from '@mtproto/core'
import { GeoInfoRes, SendCodeRes, SignInRes, TG_IDialog, TG_IPeer, TG_IUser } from '../types'

export const mtproto = new MTProto({
  api_id: Number(process.env.REACT_APP_TG_API_ID) || -1,
  api_hash: process.env.REACT_APP_TG_API_HASH || '-1',
  test: false,
})

const inputUser = {
  self: {
    _: 'inputUserSelf',
  },
}

class TG_API {
  /**
   * Authorization
   */

  async sendCode(phone: string) {
    return (await mtproto.call('auth.sendCode', {
      phone_number: phone,
      settings: { _: 'codeSettings' },
    })) as SendCodeRes
  }

  async signIn(code: string, phone: string, hash: string) {
    return (await mtproto.call('auth.signIn', {
      phone_code: code,
      phone_number: phone,
      phone_code_hash: hash,
    })) as SignInRes
  }

  async getGeoCode() {
    return (await mtproto.call('help.getNearestDc', {})) as GeoInfoRes
  }

  /**
   * User information
   */

  async getSelfUser() {
    return (await mtproto.call('users.getFullUser', {
      id: inputUser.self,
    })) as TG_IUser
  }

  async getPeer(user_id: number, access_hash: string) {
    return (await mtproto.call('users.getFullUser', {
      id: {
        _: 'inputUser',
        user_id,
        access_hash,
      },
    })) as TG_IPeer
  }

  /**
   * Dialogs
   */

  async getAllDialogs() {
    return (await mtproto.call('messages.getDialogs', {
      offset_peer: {
        _: 'inputPeerEmpty',
      },
      limit: 300,
      hash: 122345,
    })) as TG_IDialog
  }

  /**
   * Contacts
   */

  async getAllContacts() {}
}

export default new TG_API()
