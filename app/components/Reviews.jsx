import React from 'react'
import Review from './Review';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.reviews.map(review => <Review key={review.id} review={review} />)
        }
      </div>
    )
  }
}