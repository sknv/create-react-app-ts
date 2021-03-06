import * as React from 'react'
import { Link } from 'react-router-dom'

import '../Index.css'

import { fetchProfile, IProfile } from '../../actions/profile'
import Page from '../../components/layout/Page'

interface IProfileState {
  profile: IProfile
}

export default class Profle extends React.PureComponent<any, IProfileState> {
  public state = {
    profile: {
      name: ''
    }
  }

  public async componentDidMount() {
    try {
      const profile = await fetchProfile()
      this.setState({ profile })
    } catch (err) {
      console.error(err)
    }
  }

  public render() {
    const profile = this.state.profile
    const actions = (
      <Link className="text-grey-dark hover:text-black" to="/logout">
        Logout
      </Link>
    )

    return (
      <Page header="My Profile" actions={actions} back={true}>
        <section className="p-4 border border-grey-light rounded">
          <h3 className="mb-3">My Profile</h3>
          Welcome, {profile.name}
        </section>
      </Page>
    )
  }
}
