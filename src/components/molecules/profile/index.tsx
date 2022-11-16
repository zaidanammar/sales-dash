import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const MoleculesProfile = () => (
  <section className="flex justify-center items-center gap-3">
    <div className="rounded-full w-14 h-14 border-2 border-indigo-300 p-1">
      <img
        src="./person.png"
        alt="person"
        className="rounded-full w-full h-full"
        loading="lazy"
      />
    </div>
    <div>
      <p className="text-base text-textDark font-bold">Budi Budiman</p>
      <p className="text-textDark2 font-bold text-xs">Owner at PT Suka Maju</p>
    </div>

    <div className="ml-2">
      <BiChevronDown size={24} />
    </div>
  </section>
)

export default MoleculesProfile
