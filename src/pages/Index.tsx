import * as React from 'react'

import './Index.css'
import logo from './logo.svg'

export default function Index() {
  return (
    <div className="text-center">
      <header>
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Welcome to React</h1>
      </header>
      <p>
        To get started, edit <code>pages/Index.tsx</code> and save to reload.
      </p>
    </div>
  )
}
