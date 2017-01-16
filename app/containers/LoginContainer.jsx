'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';

import Login from 'APP/app/components/Login';

import {login} from 'APP/app/reducers/auth';
import { saveOrder, saveItem } from 'APP/app/reducers/shoppingCart';
import {toggleLogin} from 'APP/app/reducers/login';

function mapStateToProps (state) {
  return {
    auth: state.auth,
    showLogin: state.showLogin
  };
}

function mapDispatchToProps (dispatch) {
  return {
    login (username, password) {
      dispatch(login(username, password));
    },
    saveOrder (userId) {
      dispatch(saveOrder(userId));
    },
    saveItem (userId) {
      dispatch(saveItem(userId));
    },
    toggleLogin (show) {
      dispatch(toggleLogin(show));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
