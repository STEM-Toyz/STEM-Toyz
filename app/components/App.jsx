'use strict';

import React, { Component } from 'react';

import NavbarContainer from '../containers/NavbarContainer';
import Footer from './Footer';
import ShoppingCartContainer from '../containers/ShoppingCartContainer';
import LoginContainer from 'APP/app/containers/LoginContainer';

export default class App extends Component {

  componentDidMount () {
    function storageAvailable(type) {
      try {
        var storage = window[type],
        x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      }
      catch(e) {
        return false;
      }
    }
  }

  render () {
    const showLogin = this.props.showLogin;
    const showCart = this.props.showShoppingCart;
    return (
      <div id="app" className="container-fluid">
        <div id="nav" className="row horizontal">
          <NavbarContainer />
        </div>
        <div id="views" className="row">

            {showCart ? <ShoppingCartContainer /> : null}
            {showLogin ? <LoginContainer /> : null}
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
