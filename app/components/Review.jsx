import React from 'react';

export default function(props) {
    const review = props.review;
    return (
      <div key={review.id}>
        <p>{`${review.title}\t${review.product.name}\t${review.created_at.replace(/[A-Z]/, ' ')}`}</p>
        <p>By: {review.user.firstName} {review.user.lastName[0]}. Rating: { Array(review.stars).fill(0).map((val, idx) => {
          return <span key={idx} className="glyphicon glyphicon-star"/> })}
        </p>
        <p>{review.content}</p>
      </div>
    )
}
