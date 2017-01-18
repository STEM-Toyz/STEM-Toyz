'use strict';

import ShoppingCart from '../components/ShoppingCart';
import { connect } from 'react-redux';
import { loadCart } from 'APP/app/reducers/shoppingCart';
import {toggleShoppingCart} from 'APP/app/reducers/toggleShoppingCart';

function mapStateToProps(state){
  if(!state.auth){
    state.shoppingCart = JSON.parse(window.localStorage.getItem('order'))
  }
  return {
    auth: state.auth,
    order: state.shoppingCart,
    items: state.shoppingCart.items,
    selectedUser: state.user.selectUser
  };
}

function mapDispatchToProps(dispatch){
  return {
    loadCart: function(userId){
      return dispatch(loadCart(userId));
    },
    toggleShoppingCart(toggle) {
      dispatch(toggleShoppingCart(toggle));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
