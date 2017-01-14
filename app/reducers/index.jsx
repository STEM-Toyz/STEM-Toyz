import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  user: require('./user').default,
  reviews: require('./reviews').default
})

export default rootReducer
