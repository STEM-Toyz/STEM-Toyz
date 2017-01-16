'use strict';

import React from 'react';
import { Link } from 'react-router';
export default function (props) {
  const product = props.selectedProduct;
  return (
    <div className="row">
      <div className="col-xs-4">
        {
          product && <div className="thumbnail">
          <img src={`/img/${product.imageUrl}`} height="200" width="340" />
          <h4>{product.name}</h4>
          <h5>Price: {product.price}</h5>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
        </div>
        }
        <Link to="/products" ><button>back to Products</button></Link>
      </div>
    </div>
  )
}
