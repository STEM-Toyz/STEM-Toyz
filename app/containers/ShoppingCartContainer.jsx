'use strict';

import ShoppingCart from '../components/ShoppingCart';
import { connect } from 'react-redux';


function mapStateToProps(state){
  return {
    cartOrder: state.shoppingCart.cartOrder,
    itemList: state.shoppingCart.cartOrder.items,
    selectedUser: state.user.selectUser
  };
}

function mapDispatchToProps(){
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
