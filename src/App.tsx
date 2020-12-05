import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import { Home } from './components/Home/Home'
import { External } from './components/External/External'
import 'antd/dist/antd.css'

import { DefaultLayout } from './layout/DefaultLayout'
import { Statistics } from './components/Statistics/Statistics'
import { Methods } from './components/Methods/Methods'
import MessageListener from './components/MessageListener'
import MessageNotification from './components/MessageNotification'

import './App.less'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={['/', '/statistics', '/methods', '/external']}>
            <DefaultLayout>
              <Fragment>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/statistics">
                  <Statistics />
                </Route>
                <Route exact path="/methods">
                  <Methods />
                </Route>
                <Route exact path="/external">
                  <External />
                </Route>
              </Fragment>
            </DefaultLayout>
          </Route>
          <Route exact path="/auth" component={Auth} />
          <Route
            path="*"
            component={() => {
              return <div>404</div>
            }}
          />
        </Switch>
      </Router>
      <div style={{ display: 'none' }}>
        <MessageNotification />
        <MessageListener />
      </div>
    </div>
  )
}

export default App
