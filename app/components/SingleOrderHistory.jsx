import React from 'react';
import SingleOrderHistoryItem from './SingleOrderHistoryItem';

export default function(props) {
  const order = props.order;

  return (
    <div>
      <h3>Order# {order.id}</h3>
      {
          order.items.map((historyItem, idx) => <SingleOrderHistoryItem key={historyItem.id} index={idx + 1} item={historyItem}/>)
      }
    </div>
  )
}
