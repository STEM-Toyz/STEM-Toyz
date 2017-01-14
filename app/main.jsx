'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import Orders from './components/Orders';
import Reviews from './components/Reviews';

import AppContainer from './components/AppContainer'
import AccountDetailsContainer from './containers/AccountDetailsContainer'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import { fetchUser } from './reducers/user';


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

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
      <Route path="/account/:userId" component={AccountDetailsContainer} onEnter={onAccountEnter} />
      <Route path="/account/:userId/orders" component={Orders} />
      <Route path="/account/:userId/reviews" component={Reviews} />
    </Router>
  </Provider>,
  document.getElementById('main')
);
