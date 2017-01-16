'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  return (
    <div className="container-fluid">
    	<h4>Categories:</h4>
      <ul>
        <li><button onClick={props.unfilter}>All Products</button></li>
        <li><button onClick={() => props.applyFilter('Toy')}>Toys</button></li>
        <li><button onClick={() => props.applyFilter('Video Game')}>Video Games</button></li>
        <li><button onClick={() => props.applyFilter('Board Game')}>Board Games</button></li>
        <li><button onClick={() => props.applyFilter('Card Game')}>Card Games</button></li>
      </ul>
    </div>
  )
}
