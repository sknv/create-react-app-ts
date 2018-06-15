import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexPage from '../pages/Index'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact={true} />
      </Switch>
    </BrowserRouter>
  )
}
