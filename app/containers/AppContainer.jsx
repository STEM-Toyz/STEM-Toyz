'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';

import App from 'APP/app/components/App';

import { toggleLogin } from 'APP/app/reducers/login';
import {loadCart} from 'APP/app/reducers/shoppingCart'


function mapStateToProps ({showLogin, showShoppingCart}) {
  return {showLogin, showShoppingCart};
}

function mapDispatchToProps (dispatch) {
  return {
    // loadCart: function(userId){
    //   console.log('its been called');
    //   return loadCart(userId);
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
