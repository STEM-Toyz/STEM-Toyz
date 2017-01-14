'use strict';
import axios from 'axios';


//*********** Constants ***********:
export const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';


//*********** Action Creators ***********:
export const loadAllProducts = (allProducts) => ({ type: LOAD_ALL_PRODUCTS, allProducts });

export const getAllProducts = () => {
  return (dispatch, getState) => {
    axios.get('/api/products')
      .then(res => res.data)
      .then(allProducts => {
        dispatch(loadAllProducts(allProducts))
      })
  }
}


//*********** Reducer ***********:
const initialState = { allProducts: [] };

export const productReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_ALL_PRODUCTS:
      newState.allProducts = action.allProducts;
      break;
    default:
      return state;
  }
  return newState;
}
