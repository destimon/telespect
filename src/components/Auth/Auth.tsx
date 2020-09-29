import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import countryTelephoneCode from 'country-telephone-code'
import { State } from '../../store'
import { MTProtoLoader } from '../Loaders/MTProtoLoader'

interface GeoInfoRes {
  country: string
}

interface SendCodeRes {
  phone_code_hash: string
}

interface SignInRes {}

const inputFieldJSX = (value, func) => (
  <input
    className="phone-auth-input"
    placeholder="Phone"
    type="text"
    onChange={e => func(e)}
    value={value}
  />
)

const AUTH_STAGES = [
  {
    title: 'Phone number',
    actionTitle: 'Send code',
    inputField: inputFieldJSX,
  },
  {
    title: 'Confirm code',
    actionTitle: 'Confirm',
    inputField: inputFieldJSX,
  },
]

enum AUTH_STAGES_INDEXES {
  PHONE_STAGE,
  CODE_STAGE,
}

export const Auth = () => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [hash, setHash] = useState('')
  const [stage, setStage] = useState(AUTH_STAGES_INDEXES.PHONE_STAGE)

  const mtproto = useSelector((state: State) => state.user.mtproto)

  useEffect(() => {
    mtproto
      ?.call('users.getFullUser', {
        id: {
          _: 'inputUserSelf',
        },
      })
      .then(res => console.log(res))

    mtproto?.call('help.getNearestDc', {}).then(result => {
      const geo = result as GeoInfoRes

      setPhone(`+${countryTelephoneCode(geo.country)}`)
    })
  }, [mtproto])

  const onChangeField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()

      if (stage === AUTH_STAGES_INDEXES.PHONE_STAGE) setPhone(e.target.value)
      else setCode(e.target.value)
    },
    [stage]
  )

  const onNextClick = useCallback(async () => {
    if (mtproto) {
      if (stage === AUTH_STAGES_INDEXES.PHONE_STAGE) {
        const res = (await mtproto.call('auth.sendCode', {
          phone_number: '9996627534',
          settings: { _: 'codeSettings' },
        })) as SendCodeRes

        console.log(res)

        setStage(AUTH_STAGES_INDEXES.CODE_STAGE)
        setHash(res.phone_code_hash)
      } else if (stage === AUTH_STAGES_INDEXES.CODE_STAGE) {
        console.log(hash)

        const res = (await mtproto.call('auth.signIn', {
          phone_code: '22222',
          phone_number: '9996627534',
          phone_code_hash: hash,
        })) as SignInRes

        console.log(res)
      }
    }
  }, [mtproto, hash, stage])

  if (!mtproto) return <MTProtoLoader />

  const stageData = AUTH_STAGES[stage]

  return (
    <div className="auth-page">
      <div className="auth-center">
        <div className="telespector-logo">
          <img className="image-logo" src="telegram.png" alt="logo" />
        </div>
        <h1>{stageData.title}</h1>
        <div className="auth-form">
          <div>
            {stage === AUTH_STAGES_INDEXES.PHONE_STAGE
              ? stageData.inputField(phone, onChangeField)
              : stageData.inputField(code, onChangeField)}
          </div>
          <div className="next-button" onClick={onNextClick}>
            <div className="next-button-content">
              {stageData.actionTitle}
              <i className="material-icons next-button-icon">navigate_next</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
