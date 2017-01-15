'use strict';
import axios from 'axios';


//*********** Constants ***********:
export const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';


//*********** Action Creators ***********:
export const loadAllProducts = (allProducts) => ({ type: LOAD_ALL_PRODUCTS, allProducts });
export const filterProducts = (filteredProducts) => ({ type: FILTER_PRODUCTS, filteredProducts });

export const getAllProducts = () => {
  return (dispatch, getState) => {
    axios.get('/api/products')
      .then(res => res.data)
      .then(allProducts => {
        dispatch(loadAllProducts(allProducts));
      })
  }
}


//*********** Reducer ***********:
const initialState = { allProducts: [], filteredProducts: [] };

const productReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_ALL_PRODUCTS:
      newState.allProducts = action.allProducts;
      newState.filteredProducts = action.allProducts;
      break;
    case FILTER_PRODUCTS:
      newState.filteredProducts = action.filteredProducts;
      break;
    default:
      return state;
  }
  return newState;
}

export default productReducer;
