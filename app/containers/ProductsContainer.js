'use strict';
import { connect } from 'react-redux';
import Products from '../components/Products';
import {toggleShoppingCart} from 'APP/app/reducers/toggleShoppingCart';

function unAuthAddToCart (product) {
  const order = JSON.parse(window.localStorage.getItem('order'));
  let items = order.items;
  let onOrder = items.filter(function(item){
    return item.productId === product.id;
  })[0];
  if (!onOrder){
    items.push({
      quantity: 1,
      productId: product.id,
      product
    });
    items = order.items;
    console.log('items', order.items);
  } else {
    onOrder.quantity++;
  }

  window.localStorage.setItem('order', JSON.stringify({
    status: 'in cart',
    items
  }));

  console.log('STORAGE', JSON.parse(window.localStorage.order));
}

const mapStateToProps = (state, ownProps) => {
  const allProducts = state.products.allProducts;
  const filteredProducts = state.products.filteredProducts;
  const showShoppingCart = state.showShoppingCart

  return { allProducts, filteredProducts, unAuthAddToCart,showShoppingCart};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleShoppingCart(toggle) {
      dispatch(toggleShoppingCart(toggle));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
