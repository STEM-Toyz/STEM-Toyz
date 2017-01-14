'use strict';

import React from 'react';

import Login from './Login';
import WhoAmI from './WhoAmI';
import ShoppingCart from './ShoppingCart'

export default (props) => {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const user = props.user;

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <h1 className="logo"> STEM Toyz</h1>
      {/*<img src="" className="logo" />*/}
      <div id="search" className="item">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={handleChange}></input>
          <button className="btn btn-primary btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <div id="login" className="item pull-right">
        {user ? <WhoAmI /> : <Login />}
      </div>
      <div id="cart" className="item pull-right">
        <button type='button' className="btn btn-default btn-primary"><span className="glyphicon glyphicon-shopping-cart cart-icon" type="submit"></span></button>
      </div>
    </nav>
  );
};
