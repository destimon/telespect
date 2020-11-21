import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import { Home } from './components/Home/Home'
import 'antd/dist/antd.css'

import { DefaultLayout } from './layout/DefaultLayout'
import { Statistics } from './components/Home/Statistics'
import { Methods } from './components/Home/Methods'
import { getPeerList, pushNewMessage, TG_getSelfUser } from './store/actions/userAction'
import { mtproto } from './api/telegramApi'
import { State } from './store'

const App = () => {
  const dispatch = useDispatch()
  const peers = useSelector((state: State) => state.user.peers)

  useEffect(() => {
    dispatch(getPeerList())
    dispatch(TG_getSelfUser)
  }, [dispatch])

  useEffect(() => {
    mtproto.updates.on('updateShortMessage', message => {
      const definePeer = peers.find(peer => peer.user_id === message.user_id)

      if (!definePeer) {
        // Push user
      } else {
        dispatch(
          pushNewMessage({
            ...definePeer,
            text: message.message,
          })
        )
      }
    })
  }, [peers])

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
    </div>
  )
}

export default App
