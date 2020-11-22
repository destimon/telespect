import { Avatar, List } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { mtproto } from '../../api/telegramApi'
import { State } from '../../store'

interface Props {}

export const Methods = (props: Props) => {
  const messages = useSelector((state: State) => state.user.messages)
  const peers = useSelector((state: State) => state.user.peers)

  const getUnread = async () => {
    try {
      const res = await mtproto.call('messages.getAllChats', {
        except_ids: [],
      })

      console.log('res: ', res)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Methods</h1>
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={
                <a href="https://ant.design">
                  {peers.find(peer => peer.user_id === item.sender.user_id)?.first_name}
                </a>
              }
              description={item.text}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
