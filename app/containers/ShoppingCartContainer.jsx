'use strict';

import ShoppingCart from '../components/ShoppingCart';
import { connect } from 'react-redux';
import { loadCart } from 'APP/app/reducers/shoppingCart';


function mapStateToProps(state){
  if(!state.auth){
    state.shoppingCart = JSON.parse(window.localStorage.getItem('order'))
  }
  return {
    order: state.shoppingCart,
    items: state.shoppingCart.items,
    selectedUser: state.user.selectUser
  };
}

function mapDispatchToProps(dispatch){
  return {
    loadCart: function(userId){
      return dispatch(loadCart(userId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
