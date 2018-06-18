import * as React from 'react'

import Footer from './Footer'

interface IAppProps {
  children: React.ReactNode
}

export default function App({ children }: IAppProps) {
  return (
    <div className="app">
      {children} {/* Topbar and Main sections */}
      <Footer />
    </div>
  )
}
