'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './containers/AppContainer'
import Reviews from './components/Reviews';


import AccountDetailsContainer from './containers/AccountDetailsContainer'
import ReviewsContainer from './containers/ReviewsContainer';
import CheckoutContainer from './containers/CheckoutContainer'
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/ProductContainer';
import OrderHistoryContainer from './containers/OrderHistoryContainer';
import ReviewFormContainer from './containers/ReviewFormContainer';

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import { fetchUser } from './reducers/user';
import { fetchReviews } from './reducers/reviews';
import { getAllProducts, getSelectedProduct, getProductReviews } from './reducers/products';
import { fetchOrderHistory } from './reducers/orderHistory';
import { loadCart } from './reducers/shoppingCart';

function onAccountEnter(nextRouterState) {
  store.dispatch(fetchUser(nextRouterState.params.userId));
}

function onReviewsEnter(nextRouterState) {
  store.dispatch(fetchReviews(nextRouterState.params.userId));
}

const onProductsEnter = (nextRouterState) => {
  store.dispatch(getAllProducts());
}

const onProductEnter = (nextRouterState) => {
  const productId = nextRouterState.params.product_id;
  store.dispatch(getSelectedProduct(productId));
  store.dispatch(getProductReviews(productId));
}

function onCheckoutEnter(nextRouterState) {
  //this route is just for testing the checkout out page
  const userId = 1;
  store.dispatch(loadCart(1));
}

const unAuthOrder = () => {
  const order = JSON.parse(window.localStorage.getItem('order'));
  let items;
  if (order) {
    items = order.items;
  } else {
    items = [];
  }
  window.localStorage.setItem('order', JSON.stringify({
    status: 'in cart',
    items: items
  }));
}

const onOrderHistoryEnter = (nextRouterState) => {
  store.dispatch(fetchOrderHistory(nextRouterState.params.userId));

}

render(
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path="/" component={AppContainer} onEnter={unAuthOrder}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/products/:product_id" component={ProductContainer} onEnter={onProductEnter} />
        <Route path="/checkout" component={CheckoutContainer} onEnter={onCheckoutEnter} />
        <Route path="/makeReview" component={ReviewFormContainer} />
        <Route path="/account/:userId" component={AccountDetailsContainer} onEnter={onAccountEnter} />
        <Route path="/account/:userId/orders" component={OrderHistoryContainer} onEnter={onOrderHistoryEnter}/>
        <Route path="/account/:userId/reviews" component={ReviewsContainer} onEnter={onReviewsEnter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
