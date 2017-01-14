import React from 'react';

export default (props) => {

  return (
    <div className="container">
  <div className="shopping-cart">
    <div className="shopping-cart-header">
      <i className="glyphicon glyphicon-shopping-cart cart-icon"></i>
      <span className="badge">3</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">$2,229.97</span>
      </div>
    </div>

    <ul className="shopping-cart-items">
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className="item-name">Sony DSC-RX100M III</span>
        <span className="item-price">$849.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>

      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
        <span className="item-name">KS Automatic Mechanic...</span>
        <span className="item-price">$1,249.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>

      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
        <span className="item-name">Kindle, 6" Glare-Free To...</span>
        <span className="item-price">$129.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="#" className="button">Checkout</a>
  </div>
</div>

  )
}
