'use strict';
import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import CheckoutLineItem from '../components/CheckoutLineItem';
import { updateItem } from '../reducers/shoppingCart';

const mapStateToProps = (state, ownProps) => {
  return {}
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      item: props.item,
      quantityVal: props.item.quantity
    };
    this.props = props;
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
    return (
      <CheckoutLineItem
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        quantityVal={this.state.quantityVal}
        {...this.state}
      />
    )
  }
})
