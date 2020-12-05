import React, { useEffect } from 'react'

import { Divider, Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../store'
import { TG_getSelfUser } from '../store/actions/userAction'

const { Content, Sider } = Layout

interface Props {
  children: React.ReactChild
}

export const DefaultLayout = (props: Props) => {
  const dispatch = useDispatch()
  const userData = useSelector((state: State) => state.user.userData)

  useEffect(() => {
    dispatch(TG_getSelfUser())
  }, [])

  if (!userData) return null

  return (
    <Layout>
      <Sider>
        <div className="user-short-info">
          {userData.first_name}
          <Divider />
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/statistics">Statistics</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/methods">Methods</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<DeploymentUnitOutlined />}>
            <Link to="/external">External connection</Link>
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
