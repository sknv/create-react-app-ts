import * as React from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'

const redirectUnauthorizedTo = '/login'

function isUserLoggedIn() {
  return true
}

export default function ProtectedRoute({ component, ...props }: RouteProps) {
  return <Route {...props} render={renderOrRedirect(component)} />
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

type Renderer = (props: RouteComponentProps<any>) => React.ReactNode

function renderOrRedirect(Component: any): Renderer {
  return props => {
    return isUserLoggedIn() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: redirectUnauthorizedTo,
          state: { from: props.location }
        }}
      />
    )
  }
}
