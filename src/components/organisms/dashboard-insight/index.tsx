import React from 'react'
import CardInsight from '../../molecules/card/insight'

const insight = [
  {
    title: 'Profit',
    amount: 'Rp 11.500.000',
    percentage: '0.3',
    arrow: 'down',
  },
  { title: 'Sales', amount: 'Rp 56.000.000', percentage: '0.5', arrow: 'up' },
  {
    title: 'Transaction',
    amount: '1.090 transactions',
    percentage: '0.3',
    arrow: 'flat',
  },
]

const OrganismsDashboardInsight = () => (
  <article className="flex gap-5 mt-6 pb-5 w-auto overflow-x-auto">
    {insight.map((item) => (
      <CardInsight key={item.title} item={item} />
    ))}
  </article>
)

export default OrganismsDashboardInsight
