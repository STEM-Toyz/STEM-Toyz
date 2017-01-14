'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './containers/AppContainer'
import Orders from './components/Orders';
import Reviews from './components/Reviews';

import AccountDetailsContainer from './containers/AccountDetailsContainer'
import ReviewsContainer from './containers/ReviewsContainer';
import ProductContainer from './containers/ProductsContainer'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import { fetchUser } from './reducers/user';
import { fetchReviews } from './reducers/reviews';
import { getAllProducts } from './reducers/products'

const onProductsEnter = (nextRouterState) => {
  store.dispatch(getAllProducts());
}

const ExampleApp = connect(
  ({ auth }) => ({ user: auth }) // map state to props
)(
  ({ user, children }) => // dumb component
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
);

function onAccountEnter(nextRouterState) {
  store.dispatch(fetchUser(nextRouterState.params.userId));
}

function onReviewsEnter(nextRouterState) {
  store.dispatch(fetchReviews(nextRouterState.params.userId));
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/products" component={ProductContainer} onEnter={onProductsEnter} />
        <IndexRedirect to="/products" />
      </Route>
      <Route path="/account/:userId" component={AccountDetailsContainer} onEnter={onAccountEnter} />
      <Route path="/account/:userId/orders" component={Orders} />
      <Route path="/account/:userId/reviews" component={ReviewsContainer} onEnter={onReviewsEnter}/>
    </Router>
  </Provider>,
  document.getElementById('main')
);
