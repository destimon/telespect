import React, { Fragment } from 'react'
import ModalLoader from './ModalLoader'

interface Props {

}

export const MTProtoLoader = (props: Props) => {
  return (
    <ModalLoader>
      <div className="mtproto-loading">
        <h3>MTProto connecting...</h3>
        <p>Wait a minute</p>
      </div>
    </ModalLoader>
  )
}
