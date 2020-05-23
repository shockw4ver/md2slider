import * as React from 'react'
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from '../pages/home'

const history = createBrowserHistory()

export function AppRoutes() {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}