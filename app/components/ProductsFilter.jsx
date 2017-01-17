'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  return (
    <sidebar className="sidebar">
    	<h4>Filter by:</h4>
      <ul className="list-unstyled btn-group-vertical">
        <li><section><button onClick={props.unfilter}><h4>All Products</h4></button></section></li>
        <hr />
        <li><section><button onClick={() => props.applyFilter('Toy')}><h4>Toys</h4></button></section></li>
        <hr />
        <li><button onClick={() => props.applyFilter('Video Game')}>Video Games</button></li>
        <hr />
        <li><button onClick={() => props.applyFilter('Board Game')}>Board Games</button></li>
        <hr />
        <li><button onClick={() => props.applyFilter('Card Game')}>Card Games</button></li>
      </ul>
    </sidebar>
  )
}
