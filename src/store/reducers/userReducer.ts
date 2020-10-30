import { IUser } from '../../types'
import { GET_USER } from '../constants'

export interface UserState {
  userData: IUser | null
}

export const userInitialState: UserState = {
  userData: null,
}

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userData: action.payload,
      }
    default:
      return state
  }
}
