'use strict';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import { updateOrder } from '../reducers/shoppingCart';
import { updateProduct } from '../reducers/products';


const mapStateToProps = (state, ownProps) => {
  const order = state.shoppingCart;
  return { order };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  function placeOrder (event, order) {
    const update = { status: 'ordered'}
    dispatch(updateOrder(order, update));
    order.items.map(item => {
      const newProductQuantity = item.product.quantity - item.quantity;
      const productId = item.product.id
      dispatch(updateProduct(productId, { quantity: newProductQuantity }))
    })
  }
  return { placeOrder };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
