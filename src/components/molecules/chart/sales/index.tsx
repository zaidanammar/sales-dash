import React from 'react'
import { Area } from '@ant-design/plots'

const config = {
  data: [
    {
      Date: '2010-01',
      scales: 500,
    },
    {
      Date: '2010-02',
      scales: 400,
    },
    {
      Date: '2010-03',
      scales: 200,
    },
    {
      Date: '2010-04',
      scales: 300,
    },
    {
      Date: '2010-05',
      scales: 400,
    },
    {
      Date: '2010-06',
      scales: 350,
    },
    {
      Date: '2010-07',
      scales: 430,
    },
    {
      Date: '2010-08',
      scales: 200,
    },
    {
      Date: '2010-09',
      scales: 300,
    },
  ],
  xField: 'Date',
  yField: 'scales',
  xAxis: {
    tickCount: 4,
  },
  smooth: true,
  height: 230,
}

const MoleculesChartSales = () => (
  <article className="shadow-md rounded-xl p-5">
    <div className="flex justify-between items-center">
      <p className="font-bold text-textDark2">Sales Chart</p>
    </div>
    <div className="mt-4">
      <Area {...config} />
    </div>
  </article>
)

export default MoleculesChartSales
