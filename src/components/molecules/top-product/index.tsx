/* eslint-disable react/no-array-index-key */
import React from 'react'

const Product = () => (
  <section className="flex flex-col justify-center items-center gap-3 border-2 rounded-xl p-4 border-[#989EFF] hover:transition-colors hover:bg-indigo-50 duration-300 ease-in-out cursor-pointer">
    <div className="rounded-full w-12 h-12">
      <img
        src="./ovo.png"
        alt="person"
        className="rounded-ful w-full h-full"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col justify-center items-center -mt-2">
      <p className="text-sm text-primary font-semibold">OVO</p>
      <p className="text-textDark2 font-bold text-xs">100.000</p>
      <p className="whitespace-nowrap font-bold text-xs">68 transactions</p>
    </div>
  </section>
)

const MoleculesTopProduct = () => (
  <article className="shadow-md rounded-xl mt-5 p-5">
    <p className="font-bold text-textDark2">Top 5 Products</p>
    <div className="flex gap-3 overflow-auto mt-5">
      {new Array(5).fill(undefined).map((_, idx) => (
        <Product key={idx} />
      ))}
    </div>
  </article>
)

export default MoleculesTopProduct
