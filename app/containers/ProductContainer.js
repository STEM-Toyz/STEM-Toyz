'use strict';
import { connect } from 'react-redux';
import Product from '../components/Product';

const mapStateToProps = (state, ownProps) => {
  const selectedProduct = state.products.selectedProduct;
  return { selectedProduct };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
