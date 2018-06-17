import * as React from 'react'

// import Content from './Content'
import Topbar from './Topbar'

interface IProps {
  back?: boolean
  header?: string
  actions?: React.ReactNode
  children?: React.ReactNode
}

export default function Page({ back, header, actions, children }: IProps) {
  return (
    <React.Fragment>
      <Topbar header={header} back={back}>
        {actions}
      </Topbar>
      {/* <Content>{children}</Content> */}
    </React.Fragment>
  )
}
