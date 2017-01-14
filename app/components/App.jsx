'use strict';

import React, { Component } from 'react';

import NavbarContainer from '../containers/NavbarContainer';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';
import Login from './Login';

export default class App extends Component {

  render () {
    const showLogin = this.props.showLogin;
    return (
      <div id="app" className="container-fluid">
        <div id="nav" className="row horizontal">
          <NavbarContainer />
        </div>
        <div id="views" className="row">
          {showLogin ? <Login /> : null}
          <ShoppingCart />
          {
           this.props.children && React.cloneElement(this.props.children, this.props)
          }
        </div>
        <div id="footer" className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
