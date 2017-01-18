'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  return (
    <div className="container-fluid sidebar">
    	<h4>Filter by:</h4>
      <br>
      </br>
      <div className="left-navigation">
        <ul className="list list-unstyled btn-group-vertical">
          <li><button onClick={props.unfilter} className="btn btn-primary btn-outline-success filter-button">All Products</button></li>

        <li><button onClick={() => props.applyFilter('Toy')} className="btn btn-primary btn-outline-success filter-button" >Toys</button></li>

          <li><button onClick={() => props.applyFilter('Video Game')} className="btn btn-primary btn-outline-success filter-button">Video Games</button></li>
          <li><button onClick={() => props.applyFilter('Board Game')} className="btn btn-primary btn-outline-success filter-button">Board Games</button></li>

          <li><button onClick={() => props.applyFilter('Card Game')} className="btn btn-primary btn-outline-success filter-button">Card Games</button></li>
        </ul>
      </div>
    </div>
  )
}
