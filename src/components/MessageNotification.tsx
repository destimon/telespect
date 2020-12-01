import React from 'react'
import { Button } from 'antd'

import { notification } from 'antd'
import { RadiusBottomrightOutlined } from '@ant-design/icons'

interface Props {}

const MessageNotification = (props: Props) => {
  return (
    <div>
      <RadiusBottomrightOutlined />
    </div>
  )
}

export default MessageNotification
