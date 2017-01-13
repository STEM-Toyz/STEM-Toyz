'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import NavbarContainer from './NavbarContainer';

export default function AppContainer (props) {
  return (
    <div id="app" className="container-fluid">
      <div id="nav" className="row horizontal">
        <NavbarContainer />
      </div>
      <div id="views" className="row">
        // Views
      </div>
      <div id="footer" className="row">
        // Footer
      </div>
    </div>
  );
};
