import React from 'react'

export const Login = ({ login }) => {

  // EI: might be nice from a readability standpoint to have the onSubmit function defined somewhere other than inline
  return (
    <div className="login">
      <form onSubmit={evt => {
          evt.preventDefault()
          login(evt.target.username.value, evt.target.password.value);
        } } className="pull-right">
        <input className="form-control mr-sm-2" type="text" placeholder="Username" name="username" />
        <input className="form-control mr-sm-2" type="text" placeholder="Password" name="password" type="password" />
        <input className="btn btn-primary btn-outline-success my-2 my-sm-0" type="submit" value="Login" />
      </form>
      <form onSubmit={evt => {
          evt.preventDefault()
          login(evt.target.username.value, evt.target.password.value);
        } } className="pull-right">
        <input className="form-control mr-sm-2" type="text" placeholder="Username" name="username" />
        <input className="form-control mr-sm-2" type="text" placeholder="Password" name="password" type="password" />
        <input className="form-control mr-sm-2" type="text" placeholder="Confirm Password" name="password" type="password" />
        <input className="btn btn-primary btn-outline-success my-2 my-sm-0" type="submit" value="Sign-Up" />
      </form>
    </div>
  );
};

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login}
)(Login);
