import { Button } from 'antd'
import React from 'react'
import { SwapOutlined } from '@ant-design/icons'

interface Props {}

export const External = (props: Props) => {
  return (
    <div>
      <div>External</div>
      <div>Current status: disabled</div>
      <div>
        <Button type="primary" shape="round" icon={<SwapOutlined />} size={'large'}>
          Connect
        </Button>
      </div>
    </div>
  )
}
