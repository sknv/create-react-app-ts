import * as React from 'react'

import Header from './Header'
import Main from './Main'

interface IPageProps {
  back?: boolean
  header?: string
  actions?: React.ReactNode
  children?: React.ReactNode
}

export default function Page({ back, header, actions, children }: IPageProps) {
  return (
    <React.Fragment>
      <Header header={header} back={back}>
        {actions}
      </Header>
      <Main>{children}</Main>
    </React.Fragment>
  )
}
