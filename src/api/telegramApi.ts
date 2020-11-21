import { MTProto } from '@mtproto/core'

export const mtproto = new MTProto({
  api_id: Number(process.env.REACT_APP_TG_API_ID) || -1,
  api_hash: process.env.REACT_APP_TG_API_HASH || '-1',
  test: false,
})
