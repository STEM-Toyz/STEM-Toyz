import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  const item = props.item;

  function setInfo() {
    props.setReviewInfo(item.product, props.userId);
  }

  return (
    <div>
      <div className="orderHistoryItems">{`${props.index}.`}</div>
      <Link to={`/products/${item.product.id}`}><div className="orderHistoryItems orderHistoryItemName">{`${item.product.name}`}</div></Link>
      <div className="orderHistoryItems" id="orderHistoryQuantity">{`${item.quantity}`}</div>
      <div className="orderHistoryItems" id="orderHistoryPrice">{`$${item.price}`}</div>
      <div className="orderHistoryItems">{`$${item.totalPrice}`}</div>
      <Link to={'/makeReview'}><div className="orderHistoryItems"><button className="btn btn-primary btn-outline-success" onClick={setInfo}>Write Review</button></div></Link>
    </div>
  )
}
