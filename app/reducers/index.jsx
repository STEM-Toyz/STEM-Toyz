import { combineReducers } from 'redux';
import { productReducer } from './products';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: productReducer
});

export default rootReducer
