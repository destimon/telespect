export interface IUser {
  user_id: string
  username?: string
  last_name?: string
  first_name?: string
  access_hash: string
}

export interface IMessage {
  sender: IPeer
  text: string
}

export interface TG_IMessage {
  user_id: string
  id: string
  message: string
}

export interface IPeer {
  user_id: string
  username?: string
  last_name?: string
  first_name?: string
}

export interface TG_IUser {
  user: {
    user_id: string
    username?: string
    last_name?: string
    first_name?: string
    access_hash: string
  }
}

export interface TG_IPeer {
  user: {
    id: string
    username?: string
    last_name?: string
    first_name?: string
    access_hash: string
  }
}

export interface GeoInfoRes {
  country: string
}

export interface SendCodeRes {
  phone_code_hash: string
}

export interface SignInRes {}
