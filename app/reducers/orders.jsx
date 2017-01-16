import axios from 'axios';

const inititalState = {
  orderHistory: []
}

const SELECT_USER_HISTORY = 'SELECT_USER_HISTORY';

export const fetchOrderHistory = userId => {
  return function(dispatch) {
    return axios.get(`/api/user/${userId}/orders/history`)
      .then(history => dispatch(setUserHistory(history)))
  }
}

export const setUserHistory(history) {
  return {
    action: SELECT_USER_HISTORY,
    history
  }
}

const reducer = (state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SELECT_USER_HISTORY:
      newState.orderHistory = action.history;
      break;
  }

  return newState;
}

export default reducer;
