import React from 'react'
import ChartSales from '../../molecules/chart/sales'
import TopAgent from '../../molecules/top-agent'
import TopProduct from '../../molecules/top-product'

const OrganismsSales = () => (
  <div className="grid grid-cols-3 gap-6 mt-2">
    <div className="col-span-2">
      <ChartSales />
      <TopProduct />
    </div>
    <TopAgent />
  </div>
)

export default OrganismsSales
