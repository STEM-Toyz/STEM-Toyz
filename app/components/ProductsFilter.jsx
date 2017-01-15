'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  return (

    <div className="container-fluid">
    	<h4>Categories:</h4>
      <ul>
        <li><button onClick={(event) => props.loadAllProducts('Toy')}>All Products</button></li>
        <li><button onClick={(event) => props.applyFilter('Toy')}>Toys</button></li>
        <li><button onClick={(event) => props.applyFilter('Toy')}>Video Games</button></li>
        <li><button onClick={(event) => props.applyFilter('Toy')}>Board Games</button></li>
        <li><button onClick={(event) => props.applyFilter('Toy')}>Card Games</button></li>
        <li>Board Games</li>
        <li>Card Games</li>
      </ul>
    </div>
  )
}
