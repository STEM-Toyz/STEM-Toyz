'use strict';

// const defaultState = {
//   showLogin: false
// };

const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

const reducer = (state = false, action) => {
  switch (action.type) {
  case TOGGLE_LOGIN:
    return action.toggle;
  default:
    return state;
  }
}

export const toggleLogin = toggle => ({
  type: TOGGLE_LOGIN, toggle
});

export default reducer;
