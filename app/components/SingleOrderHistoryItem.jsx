import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  const item = props.item;

  return (
    <div>
      <div className="orderHistoryItems">{`${props.index}.`}</div>
      <Link to={`/products/${item.product.id}`}><div className="orderHistoryItems orderHistoryItemName">{`${item.product.name}`}</div></Link>
      <div className="orderHistoryItems">{`${item.quantity}x`}</div>
      <div className="orderHistoryItems" id="orderHistoryPrice">{`$${item.price}`}</div>
      <div className="orderHistoryItems">{`$${item.totalPrice}`}</div>
    </div>
  )
}
