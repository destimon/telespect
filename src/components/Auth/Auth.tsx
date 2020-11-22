import React, { useCallback, useEffect, useState } from 'react'
import countryTelephoneCode from 'country-telephone-code'
import telegramApi from '../../api/telegramApi'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../store'

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
  PHONE_STAGE = 0,
  CODE_STAGE,
}

export const Auth = () => {
  const userData = useSelector((state: State) => state.user.userData)
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [hash, setHash] = useState('')
  const [stage, setStage] = useState(AUTH_STAGES_INDEXES.PHONE_STAGE)

  const getNearDc = useCallback(async () => {
    const geo = await telegramApi.getGeoCode()

    setPhone(`+${countryTelephoneCode(geo.country)}`)
  }, [])

  useEffect(() => {
    getNearDc()
  }, [])

  const onChangeField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // e.preventDefault()

      // if (/[a-zA-Z]/gi.test(e.target.value)) return
      if (stage === AUTH_STAGES_INDEXES.PHONE_STAGE) setPhone(e.target.value)
      else setCode(e.target.value)
    },
    [stage]
  )

  const onNextClick = useCallback(async () => {
    if (stage === AUTH_STAGES_INDEXES.PHONE_STAGE) {
      const response = await telegramApi.sendCode(phone)

      setStage(AUTH_STAGES_INDEXES.CODE_STAGE)
      setHash(response.phone_code_hash)
    } else if (stage === AUTH_STAGES_INDEXES.CODE_STAGE) {
      await telegramApi.signIn(code, phone, hash)
    }
  }, [hash, stage, phone, code])

  const stageData = AUTH_STAGES[stage]

  if (userData) return <Redirect to="/" />

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
