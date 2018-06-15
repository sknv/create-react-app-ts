import * as React from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'

interface IProtectedRouteProps extends RouteProps {
  redirectTo: string
}

function isUserLoggedIn() {
  return true
}

export default function ProtectedRoute({
  component,
  redirectTo,
  ...props
}: IProtectedRouteProps) {
  return <Route {...props} render={renderOrRedirect(component, redirectTo)} />
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

type Renderer = (props: RouteComponentProps<any>) => React.ReactNode

function renderOrRedirect(Component: any, redirectTo: string): Renderer {
  return props => {
    return isUserLoggedIn() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: redirectTo,
          state: { from: props.location }
        }}
      />
    )
  }
}
