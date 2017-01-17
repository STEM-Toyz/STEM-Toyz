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
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/ProductContainer';
import OrderHistoryContainer from './containers/OrderHistoryContainer';

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import { fetchUser } from './reducers/user';
import { fetchReviews } from './reducers/reviews';
import { getAllProducts, getSelectedProduct } from './reducers/products';
import { fetchOrderHistory } from './reducers/orderHistory';

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
      </Route>
      <Route path="/account/:userId" component={AccountDetailsContainer} onEnter={onAccountEnter} />
      <Route path="/account/:userId/orders" component={OrderHistoryContainer} onEnter={onOrderHistoryEnter}/>
      <Route path="/account/:userId/reviews" component={ReviewsContainer} onEnter={onReviewsEnter}/>
    </Router>
  </Provider>,
  document.getElementById('main')
);
