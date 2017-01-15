'use strict';
import axios from 'axios';


const RECEIVE_CART= "RECEIVE_CART"


export const receiveCart = order => ({
  type: RECEIVE_CART, order
});


export const deleteItem = (orderId, itemId) =>{
  return (dispatch) => {
    axios.delete(`/api/order/${orderId}/items/${itemId}`)
      .then(response => {
        dispatch(remove(response.data));
      })
  }
}

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




const initialState = {
  list: [],
  cartOrder: {}
}

const reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch(action.type){


    case RECEIVE_CART:
      newState.cartOrder = action.order;
      break;

    default:
      return state;
  }
}

export default reducer;
