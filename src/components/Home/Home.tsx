import React from 'react'
import { Col, Row } from 'antd'

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className="page-container">
      <Row>
        <Col span={8}>First segment</Col>
        <Col span={12}>Second segment</Col>
      </Row>
    </div>
  )
}
