import React from 'react';
import { Link } from 'react-router';

export default function(props) {
    const review = props.review;
    return (
      <div key={review.id}>
        <div className="reviewFirstItem">{review.title}</div>
        <Link to={`/products/${review.product.id}`}><div className="reviewFirstLine">{review.product.name}</div></Link>
        <div className="reviewFirstLine">{review.created_at.replace(/[A-Z]/, ' ')}</div>
        <div>By: {review.user.firstName} {review.user.lastName[0]}. Rating: { Array(review.stars).fill(0).map((val, idx) => {
          return <span key={idx} className="glyphicon glyphicon-star"/> })}
        </div>
        <br/>
        <div>{review.content}</div>
      </div>
    )
}
