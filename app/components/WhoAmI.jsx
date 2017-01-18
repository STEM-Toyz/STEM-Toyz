import React from 'react'
import { Link } from 'react-router';

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
     <Link to={`/account/${user.id}`}>
      <div className="vertical">
       <span id="user" className="glyphicon glyphicon-user"></span>
        <p className="whoami-user-name">Hi {user && user.firstName}!</p>
      </div>
    </Link>
    <button className="logout btn btn-primary btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout}
)(WhoAmI);
