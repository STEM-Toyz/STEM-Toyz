'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import NavbarContainer from '../containers/NavbarContainer';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';

export default function AppContainer (props) {
  return (
    <div id="app" className="container-fluid">
      <div id="nav" className="row horizontal">
        <NavbarContainer />
      </div>
      <div id="views" className="row">
        <ShoppingCart />
      </div>
      <div id="footer" className="row">
        <Footer />
      </div>
    </div>
  );
}
