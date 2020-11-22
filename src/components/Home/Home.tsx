import React from 'react'
import { Col, Divider, Row } from 'antd'
import { useSelector } from 'react-redux'
import { State } from '../../store'
import Title from 'antd/lib/typography/Title'

interface Props {}

export const Home = (props: Props) => {
  const userData = useSelector((state: State) => state.user.userData)

  return (
    <div className="page-container">
      <Row>
        <Col span={8}>
          <img src="/default_avatar.png" alt="avatar" className="avatar" />
          <Divider />
          <Row>
            <Col span={8}>
              <Title level={3}>{userData?.first_name}</Title>
            </Col>
            <Col span={8}>
              <div className="led-green"></div>
            </Col>
          </Row>
        </Col>
        <Col span={12}>Second segment</Col>
      </Row>
    </div>
  )
}
