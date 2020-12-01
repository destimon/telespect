import { Row, Col } from 'antd'
import React, { useEffect } from 'react'
import telegramApi from '../../api/telegramApi'
import PieChart from '../Graphs/PieChart'

interface Props {}

const GeneralAnalyst = (props: Props) => {
  const fetchDialogs = async () => {
    const res = await telegramApi.getAllDialogs()

    console.log(res)
  }

  useEffect(() => {
    fetchDialogs()
  }, [])

  return (
    <div>
      <Row>
        <Col span={8}>
          <PieChart />
        </Col>
        <Col span={12}>Other</Col>
      </Row>
    </div>
  )
}

export default GeneralAnalyst
