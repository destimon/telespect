import React from 'react'

import { Breadcrumb, Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

interface Props {
  children: React.ReactChild
}

export const DefaultLayout = (props: Props) => {
  return (
    <Layout>
      <Sider>
        <div className="logo" />
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
