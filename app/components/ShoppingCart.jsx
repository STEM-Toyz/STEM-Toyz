import React from 'react';
import {Link} from 'react-router';

import {loadCart} from 'APP/app/reducers/shoppingCart';

export default (props) => {

  return (

    <div className="shopping-cart">
    <div className="shopping-cart-header">
      <i className="glyphicon glyphicon-shopping-cart cart-icon"></i>
      <span className="badge">3</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">$2,229.97</span>
      </div>
    </div>
    {
    loadCart(1)
    }
    <ul className="shopping-cart-items">
    </ul>
    <Link to="/checkout" className="button">Checkout</Link>
  </div>

  )
}




  // {
  //   props.selectedUser.name ? props.itemList.map(item => {
  //       return (
  //       <li className="clearfix">
  //         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
  //         <span className="item-name">Kindle, 6" Glare-Free To...</span>
  //         <span className="item-price">$129.99</span>
  //         <span className="item-quantity">Quantity: 01</span>
  //       </li>
  //       )
  //     })
  //   :
  //   (
  //   <div>
  //     <h1>User not logged in</h1>
  //   </div>
  //   )
  // }
