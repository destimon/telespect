import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { mtproto } from '../../api/telegramApi'
import { IMessage, IUser } from '../../types'
import { GET_PEER_LIST, GET_USER, PUSH_NEW_MESSAGE } from '../constants'

/**
 * Standard API communication
 */

export const getSelfUser = (user: IUser) => ({
  type: GET_USER,
  payload: user,
})

export const savePeer = (user: IUser) => async (dispatch: Dispatch) => {
  try {
    const response: AxiosResponse = await axios.post('http://localhost:5000/api/users', {
      ...user.user,
    })

    console.log(response)
    return {}
  } catch (err) {
    console.error(err)
  }
}

export const pushNewMessage = (message: IMessage) => ({
  type: PUSH_NEW_MESSAGE,
  payload: message,
})

export const getPeerList = () => async (dispatch: Dispatch) => {
  try {
    const response: AxiosResponse = await axios.get(`http://localhost:5000/api/users`)

    dispatch({
      type: GET_PEER_LIST,
      payload: response.data,
    })
  } catch (err) {
    console.error(err)
  }
}
/**
 * Telegram API communication
 */

export const TG_getSelfUser = () => async (dispatch: Dispatch) => {
  try {
    const res = await mtproto.call('users.getFullUser', {
      id: {
        _: 'inputUserSelf',
      },
    })

    dispatch(getSelfUser(res))
  } catch (err) {
    console.error(err)
  }
}
