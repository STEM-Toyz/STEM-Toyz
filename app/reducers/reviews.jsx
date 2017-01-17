import axios from 'axios';

const initialState = {
  reviews: [],
  reviewProduct: {},
  reviewUser: null
}

const SELECT_REVIEWS = 'SELECT_REVIEWS';
const SET_REVIEW_USER_PRODUCT = "SET_REVIEW_USER_PRODUCT";

export const setReviewUserProduct = (product, user) => {
  return {
    type: SET_REVIEW_USER_PRODUCT,
    product,
    user
  }
}

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
    case SET_REVIEW_USER_PRODUCT:
      newState.reviewProduct = action.product;
      newState.reviewUser = action.user;
      break;
  }

  return newState;
}

export default reducer;
