'use strict';
import { connect } from 'react-redux';
import ProductsFilter from '../components/ProductsFilter';
import { filterProducts, loadAllProducts } from '../reducers/products';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  function applyFilter(filter) {
    const filteredProducts = ownProps.allProducts.filter((product) => {
      return product.category === filter;
    });
    dispatch(filterProducts(filteredProducts))
  }
  return { applyFilter };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsFilter);
