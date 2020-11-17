import { Dispatch } from 'redux'
import { mtproto } from '../../api/telegramApi'
import { IUser } from '../../types'
import { GET_USER } from '../constants'

export const getUser = (user: IUser) => ({
  type: GET_USER,
  payload: user,
})

/**
 * Telegram API communication
 */

export const TG_getUser = () => async (dispatch: Dispatch) => {
  try {
    const res = await mtproto.call('users.getFullUser', {
      id: {
        _: 'inputUserSelf',
      },
    })

    dispatch(getUser(res))
  } catch (err) {
    console.error(err)
  }
}
