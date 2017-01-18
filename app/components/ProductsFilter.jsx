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
          <li><button onClick={props.unfilter} className="btn btn-primary btn-outline-success">All Products</button></li>

        <li><button onClick={() => props.applyFilter('Toy')} className="btn btn-primary btn-outline-success" >Toys</button></li>

          <li><button onClick={() => props.applyFilter('Video Game')} className="btn btn-primary btn-outline-success">Video Games</button></li>

          <li><button onClick={() => props.applyFilter('Board Game')} className="btn btn-primary btn-outline-success">Board Games</button></li>

          <li><button onClick={() => props.applyFilter('Card Game')} className="btn btn-primary btn-outline-success">Card Games</button></li>
        </ul>
      </div>
    </div>
  )
}
