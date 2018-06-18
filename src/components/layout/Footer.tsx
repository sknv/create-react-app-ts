import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footerbar() {
  return (
    <ul className="lg:hidden fixed h-10 pin-b pin-x z-100 flex bg-grey-light footer">
      <FooterLink to="/admin/item1">ITEM 1</FooterLink>
      <FooterLink to="/admin/item2">ITEM 2</FooterLink>
      <FooterLink to="/admin/menu">MENU</FooterLink>
    </ul>
  )
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

interface IFooterLinkProps {
  to: string
  children: React.ReactNode
}

function FooterLink({ to, children }: IFooterLinkProps) {
  return (
    <li className="flex-1">
      <NavLink
        className="block px-4 text-sm text-grey-dark text-center"
        style={{ lineHeight: '2.5rem' }}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  )
}
