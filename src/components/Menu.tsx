import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="menunav">
      <div className="mb-6">
        <p className="mb-3 text-grey font-bold text-sm">MENU 1</p>
        <ul>
          <li className="mb-3">
            <NavLink className="text-grey-dark" to="/admin/item1">
              Menu Item 1
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink className="text-grey-dark" to="/admin/item2">
              Menu Item 2
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <p className="mb-3 text-grey font-bold text-sm">MENU 2</p>
        <ul>
          <li className="mb-3">
            <NavLink className="text-grey-dark" to="/admin/item3">
              Menu Item 3
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink className="text-grey-dark" to="/admin/item4">
              Menu Item 4
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink className="text-grey-dark" to="/admin/item5">
              Menu Item 5
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
