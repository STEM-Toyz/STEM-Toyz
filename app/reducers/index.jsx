import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  showLogin: require('./login').default
});

export default rootReducer;
