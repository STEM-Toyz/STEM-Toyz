'use strict';
import { connect } from 'react-redux';
import Products from '../components/Products';

const mapStateToProps = (state, ownProps) => {
  const allProducts = state.products.allProducts;
  return {
    allProducts,
    addToCart: function () {}
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
