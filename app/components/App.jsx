'use strict';

import React, { Component } from 'react';

import NavbarContainer from '../containers/NavbarContainer';
import Footer from './Footer';
import ShoppingCartContainer from '../containers/ShoppingCartContainer';
import Login from './Login';

export default class App extends Component {


  render () {
    const showLogin = this.props.showLogin;
    const showCart = this.props.showShoppingCart;
    console.log('In App ', showCart);
    // this.props.loadCart(1);
    return (
      <div id="app" className="container-fluid">
        <div id="nav" className="row horizontal">
          <NavbarContainer />
        </div>
        <div className="cartLog">
          <div >
           {showCart ? <ShoppingCartContainer /> : null}
          </div>
          <div>
           {showLogin ? <Login /> : null}
          </div>
         </div>
        <div id="views" className="row">

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
