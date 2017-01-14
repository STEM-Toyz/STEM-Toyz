import axios from 'axios';
import store from '../store';

const initialState = {
  reviews: []
}

const SELECT_REVIEWS = 'SELECT_REVIEWS';

export const fetchReviews = userId => {
  return function(dispatch) {
    return axios.get(`/api/reviews/user/${userId}`)
    .then(reviews => dispatch(setReviews(reviews.data)));
  }
}

export const setReviews = reviews => {
  return {
    type: SELECT_REVIEWS,
    reviews
  }
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SELECT_REVIEWS:
      newState.reviews = action.reviews;
      break;
  }

  return newState;
}

export default reducer;
