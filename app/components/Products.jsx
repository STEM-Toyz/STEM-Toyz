'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  return (
    <div className="row">
      {
        props.allProducts.length && props.allProducts.map(product => {
          return (
            <div className="col-xs-3" key={ product.id }>
              <ul className="thumbnail" >
                <li><img src={`img/${product.imageUrl}`} height="75" width="130"></img></li>
                <li>{product.name}</li>
                <li>Price: {product.price}</li>
                <li>Category: {product.category}</li>
                <li>Description: {product.description}</li>
              </ul>
              <button className="btn btn-primary btn-outline-success my-2 my-sm-0" onClick={props.addToCart}>
                Add to cart
              </button>
            </div>
          );
          })
        }
    </div>
  )
}
