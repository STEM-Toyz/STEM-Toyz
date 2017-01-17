'use strict';

import React from 'react';
import { Link } from 'react-router';
import CheckoutLineItemContainer from '../containers/CheckoutLineItemContainer'

export default function (props) {
  const placeOrder = props.placeOrder;
  return (
    <div className="row">
      <div className="col-xs-10">
        {
          props.order.items && props.order.items.map((item) => {
            return (
              <CheckoutLineItemContainer item={item} key={item.id} order={props.order} />
            )
          })
        }
        <button onClick={event => placeOrder(event, props.order)}> Place Order </button>
      <Link to="/products" ><button> Back to Products </button></Link>
    </div>
    </div>
  )
}
