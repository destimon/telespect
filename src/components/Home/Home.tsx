import React, { useState } from 'react'
import { DatePicker, message } from 'antd'

interface Props {}

const menuMock = [
  {
    title: 'Data tools',
    description: 'Lorem ipsum',
    url: '/data',
  },
  {
    title: 'Manage methods',
    description: 'Lorem ipsum',
    url: '/methods',
  },
  {
    title: 'Terminal',
    description: 'Lorem ipsum',
    url: '/terminal',
  },
  {
    title: 'Exit',
    description: 'Lorem ipsum',
    url: '/exit',
  },
]

export const Home = (props: Props) => {
  return <h1>Home</h1>
}
