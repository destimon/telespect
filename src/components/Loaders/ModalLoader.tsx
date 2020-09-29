import React from 'react'
import SpinnerGif from './Spinners/vertical-bar-spinner.gif';

const ModalLoader = (props: React.PropsWithChildren<{}>) => {
  return (
    <div className="loader-modal">
      <img className="loader-spinner" src={SpinnerGif} alt="spinner"></img>
      {props.children}
    </div>
  )
}

export default ModalLoader
