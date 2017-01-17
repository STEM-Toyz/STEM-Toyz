import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class MakeReview extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      stars: 1,
      error: false
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onContentChange(event) {
    this.setState({content: event.target.value});
  }
  onTitleChange(event) {
    this.setState({title: event.target.value});
  }

  onSelectChange(event) {
    this.setState({stars: +event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    if(!this.state.title || !this.state.content) this.setState({error: true});
    else {
      const body = {};
      body.title = this.state.title;
      body.stars = this.state.stars;
      body.content = this.state.content;
      body.user_id = this.props.user;
      body.product_id = this.props.product.id;

      axios.post('/api/reviews/', body)
      .then(() => this.props.router.push(`/account/${this.props.user}/reviews`))
      .catch(() => this.setState({error: true}));
    }
  }

  render() {
    const product = this.props.product;
    const userId = this.props.user;
    return (
      <div id="reviewForm">
        <h3>Product: <Link to={`/products/${product.id}`}>{this.props.product.name}</Link></h3>
        <div>
          {
            this.state.error
            ? <div className="errorText">A review cannot have an empty title and/or content field, Please resolve and try again.</div>
            : null
          }
          <form onSubmit={this.onSubmit}>
            <label>Title:</label><input id="title" type="text" size="50" onChange={this.onTitleChange}></input>
            <div>
              <label>Rating:</label>
              <select id="stars" onChange={this.onSelectChange}>
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
                <textarea id="title" rows="5" cols="50" onChange={this.onContentChange}></textarea>
              </div>
              <div>
                <input type="submit"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}
