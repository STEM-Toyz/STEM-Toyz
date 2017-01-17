import React from 'react'
import Review from './Review';
import { Link } from 'react-router';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.reviews.map(review => <div key={review.id} className="thumbnail reviews"><Review review={review} /></div>)
        }
      </div>
    )
  }
}
