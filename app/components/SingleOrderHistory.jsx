import React from 'react';
import SingleOrderHistoryItem from './SingleOrderHistoryItem';

export default function(props) {
  const order = props.order;
  
  return (
    <div>
      <h3>Order# {order.id}</h3>
      <div className="col-xs-4">
        <div className="thumbnail row">
          {
            order.items.map((historyItem, idx) => <SingleOrderHistoryItem userId={props.userId} setReviewInfo={props.setReviewInfo} key={historyItem.id} index={idx + 1} item={historyItem}/>)
          }
        </div>

      </div>
    </div>
  )
}
