import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import { Home } from './components/Home/Home'
import 'antd/dist/antd.css'

import { DefaultLayout } from './layout/DefaultLayout'
import { Statistics } from './components/Home/Statistics'
import { Methods } from './components/Home/Methods'
import MessageListener from './components/MessageListener'
import MessageNotification from './components/MessageNotification'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={['/', '/statistics', '/methods']}>
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
      <MessageNotification />
      <MessageListener />
    </div>
  )
}

export default App
