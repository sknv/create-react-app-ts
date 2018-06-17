import * as React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function App({ children }: IProps) {
  return (
    <div className="app">
      {/* Topbar and main sections */}
      {children}

      {/* <Footerbar /> */}
    </div>
  )
}
