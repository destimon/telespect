import { MTProto } from "@mtproto/core";
import { CREATE_MTPROTO } from "../constants";

export interface UserState {
  mtproto: MTProto | null;
}

export const userInitialState: UserState = {
  mtproto: null,
}

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case CREATE_MTPROTO:
      return {
        ...state,
        mtproto: action.payload
      }
    default: return state;
  }
}
