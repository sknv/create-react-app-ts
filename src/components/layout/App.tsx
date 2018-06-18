import * as React from 'react'

import './App.css'

interface IAppProps {
  children: React.ReactNode
}

export default function App({ children }: IAppProps) {
  return (
    <div className="app">
      {/* Topbar and Main sections */}
      {children}

      {/* <Footerbar /> */}
    </div>
  )
}
