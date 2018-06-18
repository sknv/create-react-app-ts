import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="menunav">
      <div className="mb-6">
        <MenuHeader>MENU 1</MenuHeader>
        <ul>
          <MenuLink to="/admin/item1">Menu Item 1</MenuLink>
          <MenuLink to="/admin/item2">Menu Item 2</MenuLink>
        </ul>
      </div>

      <div className="mb-6">
        <MenuHeader>MENU 2</MenuHeader>
        <ul>
          <MenuLink to="/admin/item3">Menu Item 3</MenuLink>
          <MenuLink to="/admin/item4">Menu Item 4</MenuLink>
          <MenuLink to="/admin/item5">Menu Item 5</MenuLink>
        </ul>
      </div>
    </nav>
  )
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

interface IMenuHeaderProps {
  children: React.ReactNode
}

function MenuHeader({ children }: IMenuHeaderProps) {
  return <p className="mb-3 text-grey font-bold text-sm">{children}</p>
}

interface IMenuLinkProps {
  to: string
  children: React.ReactNode
}

function MenuLink({ to, children }: IMenuLinkProps) {
  return (
    <li className="mb-3">
      <NavLink className="block text-grey-dark hover:text-black" to={to}>
        {children}
      </NavLink>
    </li>
  )
}
