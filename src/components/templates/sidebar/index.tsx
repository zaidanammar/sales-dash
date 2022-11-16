/* eslint-disable no-nested-ternary */
import React from 'react'
import { Sidebar, useProSidebar } from 'react-pro-sidebar'
import { BsList } from 'react-icons/bs'
import { isMobile } from 'react-device-detect'

import MoleculesMenu from '../../molecules/menu'
import { listPath } from '../../../config/link'

const TemplatesSidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar()

  return (
    <Sidebar
      className={`h-full bg-background ${
        isMobile && collapsed ? 'hidden' : ''
      }`}
      width={
        isMobile && !collapsed ? '700px' : isMobile && collapsed ? '0' : '250px'
      }
    >
      <div className="pt-11 sm:pb-16 pb-8 px-8 flex gap-3 w-full items-center sm:justify-center">
        {!collapsed ? (
          <p
            role="presentation"
            onClick={() => collapseSidebar()}
            className="cursor-pointer font-bold text-primary text-3xl"
          >
            Sales Dash
          </p>
        ) : (
          <BsList
            onClick={() => collapseSidebar()}
            className="cursor-pointer fill-primary"
          />
        )}
      </div>

      {listPath.map((item) => (
        <MoleculesMenu
          key={item.title}
          item={item}
          handleCollapseSidebar={() => collapseSidebar()}
        />
      ))}
    </Sidebar>
  )
}

export default TemplatesSidebar
