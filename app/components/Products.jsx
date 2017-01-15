'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProductsFilterContainer from '../containers/ProductsFilterContainer'
export default function (props) {
  return (
    <div className="row">
      <div className="col-xs-2">
        <ProductsFilterContainer allProducts={props.allProducts} />
      </div>
      <div className="col-xs-10">
        {
          props.filteredProducts.length && props.filteredProducts.map(product => {
            return (
              <div className="col-xs-3" key={ product.id }>
                <ul className="thumbnail" >
                  <li><img src={`img/${product.imageUrl}`} height="75" width="130"></img></li>
                  <li>{product.name}</li>
                  <li>Price: {product.price}</li>
                  <li>Category: {product.category}</li>
                  <li>Description: {product.description}</li>
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
