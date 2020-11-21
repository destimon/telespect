import { IMessage, IUser } from '../../types'
import { GET_PEER_LIST, GET_USER, PUSH_NEW_MESSAGE } from '../constants'

export interface UserState {
  userData: IUser | null
  messages: IMessage[]
  peers: IUser[]
}

export const userInitialState: UserState = {
  userData: null,
  messages: [],
  peers: [],
}

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userData: action.payload,
      }
    case PUSH_NEW_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      }
    case GET_PEER_LIST:
      return {
        ...state,
        peers: action.payload,
      }
    default:
      return state
  }
}
