'use strict';

import React from 'react';
import { Link } from 'react-router';
import CheckoutLineItem from '../components/CheckoutLineItem'

export default function (props) {
  console.log(props.order.totalPrice)
  const placeOrder = props.placeOrder;
  return (
    <div className="row">
      <div className="col-xs-10">
        {
          props.order.items && props.order.items.map((item) => {
            return (
              <CheckoutLineItem item={item} key={item.id} order={props.order} />
            )
          })
        }
        <div>total order:{props.order.totalPrice}</div>
        <div><button onClick={event => placeOrder(event, props.order)} className="button"> Place Order </button></div>
      <Link to="/products" ><div><button className="small-button"> Back to Products </button></div></Link>
    </div>
    </div>
  )
}
