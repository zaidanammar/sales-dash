import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { isMobile } from 'react-device-detect'
import { IconType } from 'react-icons'

interface MoleculesMenuProps {
  item: {
    title: string
    path: string
    icon: IconType
    subMenu?: { title: string; path: string }[]
  }
  handleCollapseSidebar: () => void
}

const MoleculesMenu = ({ item, handleCollapseSidebar }: MoleculesMenuProps) => {
  const { pathname } = useLocation()

  const handleLogout = () => {
    console.log('logout will be trigger here')
  }

  return (
    <Menu key={item.path} className="w-full">
      {Array.isArray(item.subMenu) && item.subMenu.length > 0 && (
        <SubMenu label={item.title}>
          {item.subMenu.map((el) => (
            <MenuItem className="bg-background" key={el.title}>
              {el.title}
            </MenuItem>
          ))}
        </SubMenu>
      )}
      {!Array.isArray(item.subMenu) && (
        <MenuItem
          className={`-mt-3 py-1 pl-0.5 font-sans font-semibold ${
            pathname.indexOf(item.path) !== -1
              ? 'text-primary'
              : 'hover:text-secondary'
          }`}
          icon={<item.icon />}
          onClick={isMobile ? handleCollapseSidebar : () => undefined}
        >
          <Link
            onClick={item.path === 'login' ? handleLogout : () => undefined}
            to={item.path}
          />
          {item.title}
        </MenuItem>
      )}
    </Menu>
  )
}

export default MoleculesMenu
