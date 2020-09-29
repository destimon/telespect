import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import countryTelephoneCode from 'country-telephone-code'
import { State } from '../../store'
import { MTProtoLoader } from '../Loaders/MTProtoLoader'

interface GeoInfo {
  country: string
}

export const Auth = () => {
  const [phone, setPhone] = useState('')
  const mtproto = useSelector((state: State) => state.user.mtproto)

  useEffect(() => {
      mtproto?.call('help.getNearestDc', {}).then(result => {
        const geo = result as GeoInfo

        console.log(result)

        setPhone(`+${countryTelephoneCode(geo.country)}`)
      })
  }, [mtproto])

  const onChangePhone = useCallback(e => {
    e.preventDefault()
    setPhone(e.target.value)
  }, [])

  const onNextClick = useCallback(async () => {
    if (mtproto) {
      const res = await mtproto.call('auth.sendCode', {
        phone_number: '9996621534',
        settings: {
          _: 'codeSettings',
        },
      })

      console.log(res)
    }
  }, [mtproto])

  if (!mtproto) return <MTProtoLoader />

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
          <div className="next-button" onClick={onNextClick}>
            <div className="next-button-content">
              Send code<i className="material-icons next-button-icon">navigate_next</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
