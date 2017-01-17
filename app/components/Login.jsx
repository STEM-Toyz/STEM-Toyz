import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class Login extends Component {

  constructor (props) {
    super(props)
  }

  componentWillReceiveProps () {
    const showLogin = this.props.showLogin;
    this.props.toggleLogin(!showLogin);
  }

  render () {

    if (this.props.auth) {
      console.log('in the conditional');
      let order = JSON.parse(window.localStorage.getItem('order'));
      if (order.items.length) {
        console.log('LOGIN PROPS', this.props);
        this.props.saveOrder(this.props.auth.id);
        order.items.forEach(item => {
          // this.props.saveItem
        });
      }
    }

    return (
      <div className="login">
        <form onSubmit={evt => {
            evt.preventDefault()
            this.props.login(evt.target.username.value, evt.target.password.value);

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
  }
};
