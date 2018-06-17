import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../components/layout/App'

import IndexPage from '../pages/admin/Index'
import NotFoundPage from '../pages/admin/NotFound'
import ProfilePage from '../pages/admin/Profile'

export default function ProtectedApp() {
  return (
    <App>
      <Switch>
        <Route path="/admin" component={IndexPage} exact={true} />
        <Route path="/admin/profile" component={ProfilePage} exact={true} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </App>
  )
}
