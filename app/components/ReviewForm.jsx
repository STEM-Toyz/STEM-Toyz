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
        <div>
          <form>
            <label>Title:</label><input type="text"></input>
          </form>
        </div>
        <div>
          <label>Rating:</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
      </div>
      <div>
        <label>Review</label>
        <div>
          <textarea rows="5" cols="50"></textarea>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </div>
      </div>
    )
  }

}
