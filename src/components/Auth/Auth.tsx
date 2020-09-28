import React, { useCallback, useEffect, useState } from 'react'
import { MTProto } from '@mtproto/core'
import countryTelephoneCode, { countries } from 'country-telephone-code'

interface GeoInfo {
  country: string
}

export const Auth = () => {
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const api_id = 1207761
    const api_hash = '1acd94c546fd916fa25b73145be69da3'

    // 1. Create an instance
    const mtproto = new MTProto({
      api_id,
      api_hash,
    })

    // 3. Get the user country code
    mtproto.call('help.getNearestDc', {}).then(result => {
      const geo = result as GeoInfo

      setPhone(`+${countryTelephoneCode(geo.country)}`)
    })
  }, [])

  const onChangePhone = useCallback(e => {
    e.preventDefault()
    console.log('val: ', e.target.value)
    setPhone(e.target.value)
  }, [])

  return (
    <div className="auth-page">
      <div className="auth-center">
        <div className="telespector-logo">
          <img
            className="image-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/480px-Telegram_Messenger.png"
            alt="logo"
          />
        </div>
        <h1>Authorization</h1>
        <div className="auth-form">
          <div>
            <input
              className="phone-auth-input"
              placeholder="Phone"
              type="text"
              onChange={e => onChangePhone(e)}
              value={phone}
            />
          </div>
          <div className="next-button">
            Next <i className="material-icons next-button-icon">navigate_next</i>
          </div>
        </div>
      </div>
    </div>
  )
}
