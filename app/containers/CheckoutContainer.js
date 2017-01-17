'use strict';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

const shoppingCartOrder = {
  "id": 2,
  "status": "in cart",
  "created_at": "2017-01-13T17:20:10.513Z",
  "updated_at": "2017-01-13T17:20:10.513Z",
  "user_id": 1,
  "address_id": 1,
  "items": [
    {
      "totalPrice": 750,
      "id": 2,
      "quantity": 15,
      "price": 50,
      "created_at": "2017-01-13T17:20:10.524Z",
      "updated_at": "2017-01-13T17:20:10.524Z",
      "order_id": 2,
      "product_id": 2,
      "product": {
        "id": 2,
        "name": "Space Ship",
        "category": "Toy",
        "tag": [
          "Technology"
        ],
        "imageUrl": "default.jpg",
        "price": 10000,
        "description": "Space travel in style",
        "quantity": 12,
        "created_at": "2017-01-13T17:20:10.480Z",
        "updated_at": "2017-01-13T17:20:10.480Z"
      }
    },{
      "totalPrice": 99,
      "id": 4,
      "quantity": 5,
      "price": 50,
      "created_at": "2017-01-13T17:20:10.524Z",
      "updated_at": "2017-01-13T17:20:10.524Z",
      "order_id": 2,
      "product_id": 2,
      "product": {
        "id": 2,
        "name": "Chemistry Set",
        "category": "Toy",
        "tag": [
          "Technology"
        ],
        "imageUrl": "default.jpg",
        "price": 100,
        "description": "Space travel in style",
        "quantity": 12,
        "created_at": "2017-01-13T17:20:10.480Z",
        "updated_at": "2017-01-13T17:20:10.480Z"
      }
    },{
      "totalPrice": 1000,
      "id": 5,
      "quantity": 15,
      "price": 50,
      "created_at": "2017-01-13T17:20:10.524Z",
      "updated_at": "2017-01-13T17:20:10.524Z",
      "order_id": 2,
      "product_id": 2,
      "product": {
        "id": 2,
        "name": "Ray Gun",
        "category": "Toy",
        "tag": [
          "Technology"
        ],
        "imageUrl": "default.jpg",
        "price": 1000,
        "description": "Space travel in style",
        "quantity": 12,
        "created_at": "2017-01-13T17:20:10.480Z",
        "updated_at": "2017-01-13T17:20:10.480Z"
      }
    }
  ]
}
const mapStateToProps = (state, ownProps) => {
  // once you connect to the shoping cart, the shopping cart order will come from state.shoppingCart
  // const shoppingCart = state.shoppingCart;
  return { shoppingCartOrder };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
