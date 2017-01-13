'use strict';

import React from 'react';

import Login from './Login';
import WhoAmI from './WhoAmI';

export default (props) => {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const user = props.user;

  return (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <img src="NoLogo.png" className="logo" />
    <div id="search">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={handleChange}></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div id="login">
      {user ? <WhoAmI /> : <Login />}
    </div>
    <div id="cart">
      <button className="btn btn-outline-success my-2 my-sm-0 pull-right" type="submit">Shopping Cart</button>
    </div>
  </nav>
)};
