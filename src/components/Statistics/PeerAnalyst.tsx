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
    key: '4',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '8',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '10',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '11',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },

  {
    key: '12',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '13',
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
  ]

  return (
    <Row>
      <Col span={8}>
        <Table columns={columns} dataSource={data} />
      </Col>
      <Col span={14}>
        <LineChart />
      </Col>
    </Row>
  )
}

export default PeerAnalyst
