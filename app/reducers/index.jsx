import { combineReducers } from 'redux'

const rootReducer = ({
  auth: require('./auth').default,
})

export default rootReducer
