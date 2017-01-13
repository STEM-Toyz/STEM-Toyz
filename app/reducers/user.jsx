import axios from 'axios';
import store from '../store';

const initialState = {
  selectUser: {}
}

const SELECT_USER = 'SELECT_USER';

export const fetchUser = userId => {

  const user = {};

  return function(dispatch) {
    axios.get(`/api/users/${userId}`)
    .then(profile => {
      user.profile = profile.data;
      return axios.get(`/api/reviews/user/${userId}`)
    })
    .then(reviews => {
      user.reviews = reviews.data;
      return axios.get(`/api/addresses/${userId}`)
    })
    .then(addresses => {
      user.addresses = addresses.data;
      store.dispatch(setUser(user));
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
