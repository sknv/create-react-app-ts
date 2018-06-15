import * as React from 'react'

import '../Index.css'
import logo from '../logo.svg'

export default function Index() {
  return (
    <div className="text-center">
      <header className="bg-blue-dark m-6 p-6 rounded">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="text-white">Welcome to protected React area</h1>
      </header>
      <p>
        To get started, edit <code>pages/admin/Index.tsx</code> and save to reload.
      </p>
    </div>
  )
}
