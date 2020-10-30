import React, { useEffect, useState } from 'react'

import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../store'

const { Content, Sider } = Layout

interface Props {
  children: React.ReactChild
}

interface IUser {
  user?: {
    first_name: string
  }
}

export const DefaultLayout = (props: Props) => {
  const mtproto = useSelector((state: State) => state.user.mtproto)
  const [user, setUser] = useState<null | IUser>(null)

  useEffect(() => {
    mtproto
      ?.call('users.getFullUser', {
        id: {
          _: 'inputUserSelf',
        },
      })
      .then(res => {
        console.log(res)
        return setUser(res)
      })
  }, [mtproto])

  if (!user) return null

  return (
    <Layout>
      <Sider>
        <div className="user-short-info">
          {user?.user?.first_name} <hr />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/statistics">Statistics</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/methods">Methods</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            padding: '0 50px',
            minHeight: '100vh',
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}
