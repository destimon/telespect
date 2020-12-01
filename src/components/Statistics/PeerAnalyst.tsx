import { Table, Tag, Space, Col, Row } from 'antd'
import React from 'react'
import LineChart from '../Graphs/LineChart'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },

  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
]

interface Props {}

const PeerAnalyst = (props: Props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href="#">Invite {record.name}</a>
          <a href="#">Delete</a>
        </Space>
      ),
    },
  ]

  return (
    <Row>
      <Col span={12}>
        <Table columns={columns} dataSource={data} />
      </Col>
      <Col span={10}>
        <LineChart />
      </Col>
    </Row>
  )
}

export default PeerAnalyst
