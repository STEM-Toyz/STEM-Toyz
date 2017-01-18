'use strict';

import React from 'react';
import { Link } from 'react-router';
import Review from './Review';

export default function (props) {
  console.log(props);
  const product = props.selectedProduct;
  const reviews = props.productReviews;
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
        <div className="col-xs-8">
          {
            reviews.map(review => <div key={review.id} className="productReviews"><Review review={review} /></div>)
          }
        </div>
    </div>
  )
}
