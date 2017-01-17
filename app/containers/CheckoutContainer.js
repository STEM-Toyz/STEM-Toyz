'use strict';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import { updateOrder } from '../reducers/shoppingCart';


const mapStateToProps = (state, ownProps) => {
  const order = state.shoppingCart;
  // console.log('shoppingCartOrder', order)
  return { order };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  function placeOrder (event, order) {
    const update = { status: 'ordered'}
    dispatch(updateOrder(order, update));
  }
  return { placeOrder };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
