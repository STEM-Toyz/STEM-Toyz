'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';

import App from 'APP/app/components/App';

import { toggleLogin } from 'APP/app/reducers/login';

function mapStateToProps ({showLogin}) {
  return {showLogin};
}

function mapDispatchToProps (dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
