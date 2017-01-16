import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  showLogin: require('./login').default,
  products: require('./products').default,
  user: require('./user').default,
  reviews: require('./reviews').default,
  shoppingCart:require('./shoppingCart').default,
  showShoppingCart: require('./toggleShoppingCart').default
  orderHistory: require('./orderHistory').default
});

export default rootReducer;
