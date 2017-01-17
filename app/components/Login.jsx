import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class Login extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('in the did mount', this.props.auth);
  }

  componentWillReceiveProps () {
    const showLogin = this.props.showLogin;
    this.props.toggleLogin(!showLogin);
  }

  render () {

    if (this.props.auth) {
      const order = JSON.parse(window.localStorage.getItem('order'));
      window.localStorage.setItem('order', JSON.stringify({
    status: 'in cart',
    items: []
  }));
      if (order.items.length) {
        console.log('LOGIN PROPS', order);
        order.items.forEach(item => {
          item.price = item.quantity * item.product.price;
          item.product_id = item.product.id;
        });
        order.userId = this.props.auth.id;
        this.props.saveOrder(order);
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
