import { Row, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import telegramApi from '../../api/telegramApi'
import { TG_IDialog } from '../../types'
import PieChart from '../Graphs/PieChart'

interface Props {}

const GeneralAnalyst = (props: Props) => {
  const [dialogSet, setDialogSet] = useState<TG_IDialog | null>(null)
  const [dataSet, setDataSet] = useState<any>(null)

  const processStats = () => {
    if (dialogSet) {
      const result = dialogSet.chats.reduce(
        (acc, val) => {
          if (val._ === 'chat' || val._ === 'chatForbidden') return { ...acc, chats: acc.chats + 1 }
          else return { ...acc, channels: acc.channels + 1 }
        },
        {
          chats: 0,
          channels: 0,
        }
      )

      setDataSet(Object.values({ ...result, peers: dialogSet.users.length }))
    }
  }

  const fetchDialogs = async () => {
    const res = await telegramApi.getAllDialogs()

    console.log(res)
    setDialogSet(res)
  }

  useEffect(() => {
    fetchDialogs()
  }, [])

  useEffect(() => {
    processStats()
  }, [dialogSet])

  return (
    <div>
      <Row>
        <Col span={8}>{dataSet && <PieChart dataSet={dataSet} />}</Col>
        <Col span={12}>Other</Col>
      </Row>
    </div>
  )
}

export default GeneralAnalyst
