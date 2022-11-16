import React from 'react'
import { Line } from '@ant-design/plots'

const config = {
  data: [
    {
      Date: '2010-01',
      scales: 1998,
    },
    {
      Date: '2010-02',
      scales: 1850,
    },
    {
      Date: '2010-03',
      scales: 1720,
    },
    {
      Date: '2010-04',
      scales: 1818,
    },
    {
      Date: '2010-05',
      scales: 1920,
    },
    {
      Date: '2010-06',
      scales: 1802,
    },
  ],
  // padding: 'auto',
  xField: 'Date',
  yField: 'scales',
  xAxis: {
    // type: 'timeCat',
    tickCount: 4,
  },
  smooth: true,
}

const MoleculesChartSales = () => (
  <article className="shadow-md rounded-xl p-5">
    <div className="flex justify-between items-center">
      <p className="font-bold text-textDark2">Sales Chart</p>
    </div>
    <div className="mt-10">
      <Line {...config} />
    </div>
  </article>
)

export default MoleculesChartSales
