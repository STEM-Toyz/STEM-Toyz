'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import { getAllProducts } from './reducers/products'

import AppContainer from './components/AppContainer'
import ProductContainer from './containers/ProductsContainer'

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

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/products" component={ProductContainer} onEnter={onProductsEnter} />
        <IndexRedirect to="/products" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
