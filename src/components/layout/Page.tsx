import * as React from 'react'

import Main from './Main'
import Topbar from './Topbar'

interface IPageProps {
  back?: boolean
  header?: string
  actions?: React.ReactNode
  children?: React.ReactNode
}

export default function Page({ back, header, actions, children }: IPageProps) {
  return (
    <React.Fragment>
      <Topbar header={header} back={back}>
        {actions}
      </Topbar>
      <Main>{children}</Main>
    </React.Fragment>
  )
}
