import * as H from 'history'
import * as React from 'react'
import { withRouter } from 'react-router-dom'

import logo from '../../pages/logo.svg'
import chevronLeft from './chevron-left.svg'

interface IProps {
  back?: boolean
  header?: string
  children?: React.ReactNode
}

export default function Topbar({ back, header, children }: IProps) {
  return (
    <header className="fixed h-12 pin-t pin-x z-100 flex items-center border-b border-grey-light py-2">
      <div className="flex items-center container mx-auto px-4">
        <BackOrLogoWithRouter back={back} history={history} />

        <div className="flex flex-grow items-center">
          {/* Header */}
          <h3 className="flex-grow text-center">{header}</h3>
          {/* Actions */}
          {children}
        </div>
      </div>
    </header>
  )
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

interface IBackOrLogoProps {
  back?: boolean
  history: H.History
}

function BackOrLogo({ back, history }: IBackOrLogoProps) {
  const goBack = () => history.goBack()

  return back ? (
    <button type="button" className="w-8" onClick={goBack}>
      <img src={chevronLeft} className="h-6" alt="back" />
    </button>
  ) : (
    <img src={logo} className="w-8" alt="logo" />
  )
}

const BackOrLogoWithRouter = withRouter<any>(BackOrLogo)
