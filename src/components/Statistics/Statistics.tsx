import React, { useState } from 'react'

import { Col, Row, Tabs } from 'antd'
import PeerAnalyst from './PeerAnalyst'
import LineChart from '../Graphs/LineChart'
import GeneralAnalyst from './GeneralAnalyst'

const { TabPane } = Tabs

interface Props {}

export const Statistics = (props: Props) => {
  const [current, setCurrent] = useState('mail')

  const handleClick = e => {
    console.log('click ', e)
    setCurrent(e.target.value)
  }

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="General" key="1">
          <GeneralAnalyst />
        </TabPane>
        <TabPane tab="Peers">
          <PeerAnalyst />
        </TabPane>
        <TabPane tab="Incoming" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Outcoming" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}
