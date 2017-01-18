'use strict';
import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import CheckoutLineItem from '../components/CheckoutLineItem';
import { updateItem } from '../reducers/shoppingCart';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      item: props.item,
      quantityVal: props.item.quantity
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler (event) {
    const quantityVal = event.target.value;
    this.setState({ quantityVal })
  }
  submitHandler (event, itemId) {
    event.preventDefault();
    const newItemQuantity = Number(this.state.quantityVal);
    const update = { quantity: newItemQuantity }
    const order = this.props.order
    store.dispatch(updateItem(itemId, order, update))
  }
  render () {
    const item = this.props.item
    const product = this.props.item.product
    const changeHandler = this.changeHandler;
    const submitHandler = this.submitHandler;
    return (
        <div className="row">
          <div className="col-xs-10">
            {
              item && (
                <div className="row checkout-line-item">
                  <p className="checkout-line-item-sec"><img src={`/img/${product.imageUrl}`} height="50" width="85" /></p>
                  <p className="checkout-line-item-sec">{product.name}</p>
                  <p className="checkout-line-item-sec">Category: {product.category}</p>
                  <p className="checkout-line-item-sec">Price: ${item.totalPrice}</p>
                <div className="checkout-line-item-sec">
                    Quantity:
                    <form onSubmit={event => submitHandler(event, item.id)} className="checkout-line-item-sec">
                    <input className="checkout-form-input" name="quantity" type="text" onChange={changeHandler} value={this.state.quantityVal} />
                  <button type="submit" className="btn btn-primary btn-outline-success" width="5"> update </button>
                    </form>
                </div>
                </div>
              )
            }
          </div>
        </div>
      )
  }
}
