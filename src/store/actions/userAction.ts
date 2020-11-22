import { Dispatch } from 'redux'
import backendApi from '../../api/backendApi'
import telegramApi from '../../api/telegramApi'
import telegramHelpers from '../../api/telegramHelpers'
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
  const result = await backendApi.addNewUser(user)

  console.log(result)
  return {}
}

export const pushNewMessage = (message: IMessage) => ({
  type: PUSH_NEW_MESSAGE,
  payload: message,
})

export const getPeerList = () => async (dispatch: Dispatch) => {
  const users = await backendApi.getAllUsers()

  dispatch({
    type: GET_PEER_LIST,
    payload: users,
  })
}
/**
 * Telegram API communication
 */

export const TG_getSelfUser = () => async (dispatch: Dispatch) => {
  try {
    const tgUser = await telegramApi.getSelfUser()
    const user = telegramHelpers.extractUser(tgUser)

    dispatch(getSelfUser(user))
  } catch (err) {
    console.error(err)
  }
}
