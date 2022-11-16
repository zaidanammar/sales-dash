/* eslint-disable no-nested-ternary */
import React from 'react'
import {
  RiArrowRightDownLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from 'react-icons/ri'

interface MoleculesCardInsightProps {
  item: {
    title: string
    amount: string
    percentage: string
    arrow: string
  }
}

const MoleculesCardInsight = ({ item }: MoleculesCardInsightProps) => {
  const { amount, arrow, percentage, title } = item

  return (
    <section className="bg-white shadow-lg p-4 rounded-xl">
      <div>
        <p className="font-bold text-textDark2">{title}</p>
      </div>
      <div className="mt-1">
        <p className="font-bold text-lg">{amount}</p>
      </div>
      <div className="flex justify-end mt-1">
        <p
          className={`text-xs font-bold flex items-center gap-1 ${
            arrow === 'up'
              ? 'text-green-500'
              : arrow === 'down'
              ? 'text-red-500'
              : 'text-yellow-400'
          }`}
        >
          {arrow === 'up' ? (
            <RiArrowRightUpLine size={16} />
          ) : arrow === 'down' ? (
            <RiArrowRightDownLine size={16} />
          ) : (
            <RiArrowRightLine size={16} />
          )}
          {`${percentage}%`} compared to 7 days ago
        </p>
      </div>
    </section>
  )
}

export default MoleculesCardInsight
