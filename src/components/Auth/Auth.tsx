import React from 'react'

export const Auth = () => {
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
            <input placeholder="Phone" type="text" />
          </div>
          <div className="next-button">
            Next <i className="material-icons next-button-icon">navigate_next</i>
          </div>
        </div>
      </div>
    </div>
  )
}
