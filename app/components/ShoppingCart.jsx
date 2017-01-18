import React from 'react';
import {Link} from 'react-router';
import numeral from 'numeral';


export default class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.auth) {
      this.props.loadCart(this.props.auth.id);
    }
  }

  render(){

    return (

      <div className="shopping-cart">
      <div className="shopping-cart-header">
        <i className="glyphicon glyphicon-shopping-cart cart-icon"></i>
        <span className="badge">{this.props.items && this.props.items.reduce(function(acc,curr){
              return acc + curr.quantity
            }, 0)}</span>
        <div className="shopping-cart-total">
          <span className="lighter-text">Total: </span>
          <span className="main-color-text"> ${
            this.props.items && numeral(this.props.items.reduce(function(acc,curr){
              return acc + (curr.quantity * curr.product.price)
            }, 0)).format('0,0')

          }</span>
        </div>
      </div>
      <ul className="shopping-cart-items list-unstyled">
      {
        this.props.items && this.props.items.map((item,index) => {
          return (
          <li className="clearfix" key={item.id||index}>
          <img src={`/img/${item.product.imageUrl}`} height="50" width="50"/>
          <span className="item-name">{item.product.name}</span>
          <span className="item-price">${numeral(item.product.price).format('0,0')}</span>
          <span className="item-quantity">Quantity: {item.quantity}</span>
          <span className="item-total">Subtotal: ${numeral(item.quantity*item.product.price).format('0,0')}</span>
        </li>

          )
        })
      }
      </ul>
      <Link to="/checkout" className="button">Checkout</Link>
    </div>

    )
  }
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
