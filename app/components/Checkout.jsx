'use strict';

import React from 'react';
import { Link } from 'react-router';
import CheckoutLineItemContainer from '../containers/CheckoutLineItemContainer'

export default function (props) {
  const cartItems = props.shoppingCartOrder.items;
  return (
    <div className="row">
      <div className="col-xs-10">
        {
          cartItems && cartItems.map((item) => {
            return (
              <CheckoutLineItemContainer item={item} key={item.id} />
            )
          })
        }
        <Link to="/products" ><button>back to Products</button></Link>
      </div>
    </div>
  )
}
