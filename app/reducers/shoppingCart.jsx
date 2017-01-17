'use strict';
import axios from 'axios';


const RECEIVE_CART = "RECEIVE_CART";
const ADD_ITEM = "ADD_ITEM";
const CREATE_ORDER = "CREATE_ORDER";


export const receiveCart = order => ({
  type: RECEIVE_CART, order
});

export const addItem = order => ({
  type: CREATE_ORDER, order
});

export const createOrder = items => ({
  type: ADD_ITEM, items
});

export const deleteItem = (orderId, itemId) =>{
  return (dispatch) => {
    axios.delete(`/api/order/${orderId}/items/${itemId}`)
      .then(response => {
        dispatch(remove(response.data));
      })
  }
}

export const saveItem = orderId => {
  return (dispatch) => {
    axios.post(`/api/order/${orderId}/items`)
    .then(response => {
      dispatch(addItem(response.data));
    });
  };
};

export const saveOrder = ({userId, items}) => {
  return (dispatch) => {
    axios.post(`/api/user/${userId}/orders`)
    .then(response => {
      dispatch(createOrder(response.data));
      return response.data;
    })
    .then(createdOrder => {
      items.forEach(item => {
        axios.post(`/api/order/${createdOrder.id}/items`, item)
        .then(createdItem => {
          createdItem.setOrder(createdOrder);
          dispatch(addItem(response.data));
        });
      });
    });
  };
};

// export const loadAllItems = orderId => {
//   return (dispatch) => {
//     axios.get(`/api/order/${orderId}/items`)
//       .then(response => {
//         dispatch(receiveItems(response.data));
//       });
//   };
// };

export const loadCart = userId => {
  return (dispatch) => {
    axios.get(`/api/user/${userId}/orders/inCart`)
      .then(response => {
        dispatch(receiveCart(response.data));
      });
  };
};

const reducer = (state = {}, action) => {

  const newState = Object.assign({}, state);

  switch(action.type){

    case RECEIVE_CART:
      return Object.assign({}, state, action.order);

    case CREATE_ORDER:
      return Object.assign({}, state, action.order);

    case ADD_ITEM:
      return Object.assign({}, state, action.items);

    default:
      return state;
  }
};

export default reducer;
