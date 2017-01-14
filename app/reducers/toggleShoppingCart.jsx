'use strict';

const TOGGLE_CART = 'TOGGLE_CART';

export const toggleShoppingCart = toggle => ({
  type: TOGGLE_CART, toggle
})

const reducer = (state = false, action) =>{
  switch(action.type) {
    case TOGGLE_CART:
      return action.toggle;
    default:
    return state;
  }
}

export default reducer;
