'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './components/AppContainer'
import AccountDetailsContainer from './containers/AccountDetailsContainer'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import { fetchUser } from './reducers/user';


const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
);

function onAccountEnter() {
  //Temporarily just fetching user of id 1
  store.dispatch(fetchUser(1));
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
      <Route path="/account" component={AccountDetailsContainer} onEnter={onAccountEnter}/>
    </Router>
  </Provider>,
  document.getElementById('main')
);
