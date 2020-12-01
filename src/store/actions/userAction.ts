import { DispatchWithoutAction } from 'react'
import { Dispatch } from 'redux'
import backendApi from '../../api/backendApi'
import telegramApi from '../../api/telegramApi'
import telegramHelpers from '../../api/telegramHelpers'
import { IMessage, IPeer, IUser } from '../../types'
import { GET_PEER_LIST, GET_USER, PUSH_NEW_MESSAGE } from '../constants'

/**
 * Standard API communication
 */

export const getSelfUser = (user: IUser) => ({
  type: GET_USER,
  payload: user,
})

export const saveUser = (user: IUser) => async (dispatch: Dispatch) => {
  const result = await backendApi.saveNewUser(user)
}

export const savePeer = (peer: IPeer) => async (dispatch: Dispatch) => {
  const result = await backendApi.saveNewPeer(peer)

  return {}
}

export const pushNewMessage = (message: IMessage) => ({
  type: PUSH_NEW_MESSAGE,
  payload: message,
})

export const getPeerList = (user_id: number) => async (dispatch: Dispatch) => {
  const peers = await backendApi.getPeersByUserId(user_id)

  dispatch({
    type: GET_PEER_LIST,
    payload: peers,
  })
}
/**
 * Telegram API communication
 */

export const TG_getSelfUser = () => async (dispatch: Dispatch) => {
  try {
    const tgUser = await telegramApi.getSelfUser()
    const user = telegramHelpers.extractUser(tgUser)

    dispatch<any>(saveUser(user))
    dispatch(getSelfUser(user))
  } catch (err) {
    console.error(err)
  }
}
