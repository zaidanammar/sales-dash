import React from 'react'
import { BsList } from 'react-icons/bs'
import { useProSidebar } from 'react-pro-sidebar'

const MoleculesHeadline = () => {
  const { collapseSidebar } = useProSidebar()

  return (
    <aside>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Dashboard</p>
        <BsList
          onClick={() => collapseSidebar()}
          className="cursor-pointer sm:hidden block"
          size={24}
        />
      </div>
      <p className="font-bold text-textDark2">
        Today’s date: Sun, 10 April 2022
      </p>
    </aside>
  )
}

export default MoleculesHeadline
