import React from 'react';

export default function(props) {
  const item = props.item;

  return (
    <div>
      <div className="orderHistoryItems">{`${props.index}.`}</div><div className="orderHistoryItems">{`${item.product.name} ${item.quantity} x ${item.price} ${item.totalPrice}`}</div>
    </div>
  )
}
