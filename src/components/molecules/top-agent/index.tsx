/* eslint-disable react/no-array-index-key */
import React from 'react'

const Agent = () => (
  <section className="flex items-center gap-3 my-6">
    <div className="w-fit">
      <div className="rounded-full w-14 h-14 border-2 border-indigo-300 p-1">
        <img src="./person.png" alt="person" className="rounded-full" />
      </div>
    </div>
    <div className="w-full">
      <p className="text-primary text-sm font-bold">PT Suka Maju</p>
      <div className=" text-textDark2 font-bold text-xs">
        <div className="flex justify-between mt-0.5">
          <p>Profit</p>
          <p>Rp. 3.700.000</p>
        </div>
        <div className="flex justify-between mt-0.5">
          <p>Sales</p>
          <p>Rp. 5.230.000</p>
        </div>
        <div className="flex justify-between mt-0.5">
          <p>Transaction</p>
          <p>37 trans</p>
        </div>
      </div>
    </div>
  </section>
)

const MoleculesTopAgent = () => (
  <article className="shadow-md rounded-xl p-5 bg-white">
    <p className="font-bold text-textDark2">Top 5 Agents</p>
    <div className="mt-6">
      {new Array(5).fill(undefined).map((_, idx) => (
        <Agent key={idx} />
      ))}
    </div>
  </article>
)

export default MoleculesTopAgent
