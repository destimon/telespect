import { GET_COUNTRY_CODE } from "../constants"

export interface AuthState {
  phoneNumber: string,
  code: string;
  countryCode: string;
}

export const authInitialState: AuthState = {
  phoneNumber: '',
  code: '',
  countryCode: '',
}

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_CODE:
      return {
        ...state,
        countryCode: action.payload,
      }
    default: return state;
  }
}
