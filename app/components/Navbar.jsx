'use strict';

import React from 'react';

import Login from './Login'

export default (props) => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <img src="NoLogo.png" className="logo" />
    <div id="search">
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div id="login">
      <Login />
    </div>
    <div id="cart">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Shopping Cart</button>
    </div>
  </nav>
);
