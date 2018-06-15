import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexPage from '../pages/Index'
import NotFoundPage from '../pages/NotFound'

import ProtectedRoute from '../lib/components/ProtectedRoute'
import ProtectedApp from './ProtectedApp'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact={true} />

        <ProtectedRoute
          path="/admin"
          component={ProtectedApp}
          redirector={userRedirector}
        />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

function userRedirector(): string {
  // if (currentUser.isLoggedIn()) {
  //   return ''
  // }
  return '/login'
}
