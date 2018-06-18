import * as React from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom'

type Redirector = () => string

interface IProtectedRouteProps extends RouteProps {
  redirector: Redirector
}

export default function ProtectedRoute({
  component,
  redirector,
  ...props
}: IProtectedRouteProps) {
  return <Route {...props} render={renderOrRedirect(component, redirector)} />
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

type Renderer = (props: RouteComponentProps<any>) => React.ReactNode

function renderOrRedirect(Component: any, redirector: Redirector): Renderer {
  const redirectTo = redirector()
  return props =>
    redirectTo ? (
      <Redirect
        to={{
          pathname: redirectTo,
          state: { from: props.location }
        }}
      />
    ) : (
      <Component {...props} />
    )
}
