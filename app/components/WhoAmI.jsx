import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name">Hi {user && user.firstName}</span>
    <button className="logout btn btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout}
)(WhoAmI);
