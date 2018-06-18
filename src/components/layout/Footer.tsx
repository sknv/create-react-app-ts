import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footerbar() {
  return (
    <ul className="lg:hidden fixed h-10 pin-b pin-x z-100 flex bg-grey-light footer">
      <FooterLink exact={true} to="/admin">
        MAIN
        <FooterBadge>2</FooterBadge>
      </FooterLink>
      <FooterLink to="/admin/item2">ITEM 2</FooterLink>
      <FooterLink to="/admin/menu">MENU</FooterLink>
    </ul>
  )
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

interface IFooterLinkProps {
  exact?: boolean
  to: string
  children: React.ReactNode
}

function FooterLink({ exact, to, children }: IFooterLinkProps) {
  return (
    <li className="flex-1">
      <NavLink
        className="block relative h-full py-3 px-4 text-sm text-grey-dark text-center"
        exact={exact}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  )
}

interface IFooterBadgeProps {
  children: React.ReactNode
}

function FooterBadge({ children }: IFooterBadgeProps) {
  return (
    <span
      className="absolute px-2 rounded-full bg-red text-sm text-white"
      style={{ top: '0.5rem', right: '0.5rem' }}
    >
      {children}
    </span>
  )
}
