import * as React from 'react'
import { Link } from 'react-router-dom'

import '../Index.css'
import logo from '../logo.svg'

import Page from '../../components/layout/Page'

export default function Index() {
  const actions = (
    <Link className="text-grey-dark hover:text-black" to="/admin/profile">
      My Profile
    </Link>
  )

  return (
    <Page header="Index Page" actions={actions}>
      <div className="text-center">
        <header className="bg-blue-dark m-6 p-6 rounded">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="text-white">Welcome to protected React area</h1>
        </header>
        <p>
          To get started, edit <code>pages/admin/Index.tsx</code> and save to reload.
        </p>
      </div>
    </Page>
  )
}
