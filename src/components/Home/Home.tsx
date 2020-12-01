import React from 'react'
import { Avatar, Col, List, Row } from 'antd'
import { useSelector } from 'react-redux'
import { State } from '../../store'
import Title from 'antd/lib/typography/Title'
import { IMessage } from '../../types'

interface Props {}

export const Home = (props: Props) => {
  const userData = useSelector((state: State) => state.user.userData)
  const messages = useSelector((state: State) => state.user.messages)

  return (
    <div className="page-container">
      <Row>
        <Col span={8}>
          <img src="/default_avatar.png" alt="avatar" className="avatar" />
          <Row>
            <Col span={8}>
              <Title level={3}>{userData?.first_name}</Title>
            </Col>
            <Col span={8}>
              <div className="led-green"></div>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item: IMessage) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.sender.first_name}</a>}
                  description={item.text}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}
