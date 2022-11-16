import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

import Button from '../../../atoms/button'

const MoleculesCardBalance = () => (
  <section className="bg-white shadow-lg py-5 px-6 rounded-xl flex flex-col gap-5 mt-10">
    <div className="flex justify-between">
      <p className="font-bold text-textDark2">Total Balance</p>
      <BiDotsVerticalRounded size={24} className="" />
    </div>
    <div className="flex justify-center items-center">
      <p className="font-bold text-xl">Rp 1.580.000.000</p>
    </div>
    <Button title="Top Up" />
  </section>
)

export default MoleculesCardBalance
