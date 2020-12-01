import { notification } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import telegramApi, { mtproto } from '../api/telegramApi'
import telegramHelpers from '../api/telegramHelpers'
import { State } from '../store'
import { getPeerList, TG_getSelfUser, savePeer, pushNewMessage } from '../store/actions/userAction'
import { IMessage, IPeer, TG_IMessage } from '../types'
import { RadiusBottomrightOutlined } from '@ant-design/icons'

interface Props {}

const MessageListener = (props: Props) => {
  const dispatch = useDispatch()
  const peers = useSelector((state: State) => state.user.peers)
  const [definedPeer, setDefinedPeer] = useState<IPeer | null>(null)
  const userData = useSelector((state: State) => state.user.userData)
  const [receivedMessage, setReceivedMessage] = useState<TG_IMessage | null>(null)
  const [api, contextHolder] = notification.useNotification()
  const messages = useSelector((state: State) => state.user.messages)

  const openNotification = (newMessage: IMessage) => {
    api.info({
      message: `${newMessage.sender.first_name}`,
      description: <div>{newMessage.text}</div>,
      duration: 3.5,
      placement: 'bottomRight',
    })
  }

  // TODO - Need to clean up this mess and sort into components and etc...

  useEffect(() => {
    if (userData) {
      dispatch(getPeerList(userData.id))
    } else {
      dispatch(TG_getSelfUser)
    }
  }, [userData])

  const definePeer = useCallback(async () => {
    if (receivedMessage && userData) {
      const tgPeer = await telegramApi.getPeer(receivedMessage.user_id, userData.access_hash)
      const extractedPeer = telegramHelpers.extractPeer(tgPeer, userData.id)

      setDefinedPeer(extractedPeer)
      dispatch(savePeer(extractedPeer))
    }
  }, [receivedMessage, userData])

  useEffect(() => {
    if (receivedMessage && peers) {
      const API_definedPeer = peers.find(peer => peer.id === receivedMessage.user_id)

      if (!API_definedPeer) {
        definePeer()
      } else {
        setDefinedPeer(API_definedPeer)
      }
    }
  }, [receivedMessage, peers])

  useEffect(() => {
    mtproto.updates.on('updateShortMessage', (message: TG_IMessage) => {
      setReceivedMessage(message)
    })
  }, [])

  useEffect(() => {
    if (definedPeer && receivedMessage) {
      dispatch(
        pushNewMessage({
          sender: definedPeer,
          text: receivedMessage.message,
        })
      )
    }
  }, [definedPeer, receivedMessage])

  useEffect(() => {
    if (messages.length > 0) {
      openNotification(messages[0])
    }
  }, [messages])

  return (
    <>
      {contextHolder}
      <RadiusBottomrightOutlined />
    </>
  )
}

export default MessageListener
