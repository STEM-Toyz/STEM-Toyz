import axios from 'axios';

const initialState = {
  selectUser: {}
}

const SELECT_USER = 'SELECT_USER';

export const fetchUser = userId => {
  const user = {};

  return function(dispatch) {
    return axios.get(`/api/users/${userId}`)
    .then(profile => {
      user.profile = profile.data;
      return axios.get(`/api/addresses/${userId}`)
    })
    .then(addresses => {
      user.addresses = addresses.data;
      dispatch(setUser(user));
    })
  }
}

export const setUser = user => {
  return {
    type: SELECT_USER,
    user
  }
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SELECT_USER:
      newState.selectUser = action.user;
      break;
  }

  return newState;
}

export default reducer;
