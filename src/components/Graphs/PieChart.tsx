import React from 'react'
import { Pie } from 'react-chartjs-2'

interface Props {
  dataSet: any
}

const PieChart = (props: Props) => {
  const data = {
    labels: ['Chats', 'Channels', 'Peers'],
    datasets: [
      {
        data: props.dataSet || [0, 0, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  return (
    <div>
      <h2>Communication summary</h2>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
