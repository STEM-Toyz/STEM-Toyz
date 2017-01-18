'use strict';
import { connect } from 'react-redux';
import Product from '../components/Product';

const mapStateToProps = (state, ownProps) => {
  const selectedProduct = state.products.selectedProduct;
  const productReviews = state.products.selectProductReviews;
  console.log('state', state);
  return { selectedProduct, productReviews };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
