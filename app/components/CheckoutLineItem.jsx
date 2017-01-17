'use strict';

import React from 'react';
import { Link } from 'react-router';
import numeral from 'numeral';

export default function (props) {
  const item = props.item;
  const product = props.item.product;
  return (
    <div className="row">
      <div className="col-xs-10">
        {
          item && (
            <div className="row checkout-line-item">
              <p className="checkout-line-item-sec"><img src={`/img/${product.imageUrl}`} height="50" width="85" /></p>
              <p className="checkout-line-item-sec">{product.name}</p>
              <p className="checkout-line-item-sec">Category: {product.category}</p>
              <p className="checkout-line-item-sec">Price: ${item.totalPrice}</p>
              <p className="checkout-line-item-sec">
                Quantity:
                <form onSubmit={event => props.submitHandler(event, item.id)} className="checkout-line-item-sec">
                <input className="checkout-form-input" name="quantity" type="text" onChange={props.changeHandler} value={props.quantityVal}/>
              <button type="submit" className="quantity-update-btn" width="5"> update </button>
                </form>
            </p>
            </div>
          )
        }
      </div>
    </div>
  )
}
