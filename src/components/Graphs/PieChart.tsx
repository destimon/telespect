import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
  labels: ['Peers', 'Chats', 'Channels'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}
interface Props {}

const PieChart = (props: Props) => {
  return (
    <div>
      <h2>Communication summary</h2>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
