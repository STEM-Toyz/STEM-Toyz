'use strict';
import { connect } from 'react-redux';
import ProductsFilter from '../components/ProductsFilter';
import { filterProducts, getAllProducts } from '../reducers/products';

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
  function unfilter() {
    dispatch(getAllProducts())
  }
  return { applyFilter, unfilter };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsFilter);
