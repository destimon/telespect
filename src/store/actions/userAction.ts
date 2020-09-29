import { MTProto } from "@mtproto/core"
import { CREATE_MTPROTO } from "../constants"

export const createMTProto = () => {
  const api_id = 1207761
  const api_hash = '1acd94c546fd916fa25b73145be69da3'

  // 1. Create an instance
  const mtproto = new MTProto({
    api_id,
    api_hash,
  })

  return {
    type: CREATE_MTPROTO,
    payload: mtproto,
  }
}
