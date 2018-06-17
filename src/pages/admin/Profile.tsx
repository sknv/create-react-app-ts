import * as React from 'react'
import { Link } from 'react-router-dom'

import '../Index.css'

import Page from '../../components/layout/Page'

export default function Profle() {
  const actions = (
    <Link className="text-grey-dark hover:text-black" to="/logout">
      Logout
    </Link>
  )

  return (
    <Page header="My Profile" actions={actions} back={true}>
      My Profile page
    </Page>
  )
}
