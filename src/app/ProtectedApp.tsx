import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import IndexPage from '../pages/admin/Index'
import NotFoundPage from '../pages/admin/NotFound'

export default function ProtectedApp() {
  return (
    <Switch>
      <Route path="/admin" component={IndexPage} exact={true} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}
