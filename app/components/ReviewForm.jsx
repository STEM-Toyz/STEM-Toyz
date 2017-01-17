import React from 'react';
import { Link } from 'react-router';

export default class MakeReview extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      stars: null
    }
  }

  render() {
    console.log(this.props.product.name);
    const product = this.props.product;
    const userId = this.props.user;
    return (
      <div>
        <h3>Product: <Link to={`/products/${product.id}`}>{this.props.product.name}</Link></h3>
      </div>
    )
  }

}
