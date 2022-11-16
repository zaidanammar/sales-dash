import React from 'react'

const Product = () => (
  <section className=" justify-center items-center gap-3">
    <div className="rounded-full w-14 h-14 border bg-red-700" />

    <div>
      <p className="text-lg text-textDark font-bold">Maxim</p>
      <p className="text-textDark2 font-bold text-sm">150.000</p>
    </div>
  </section>
)

const MoleculesTopProduct = () => (
  <article className="shadow-md rounded-xl mt-5 p-5">
    <p className="font-bold text-textDark2">Top 5 Products</p>
    <div className="flex">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </article>
)

export default MoleculesTopProduct
