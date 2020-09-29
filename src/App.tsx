import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import Home from './components/Home/Home'
import { createMTProto } from './store/actions/userAction'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(createMTProto())
  }, [dispatch])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {!1 ? <Route exact path="/auth" component={Auth} /> : <Redirect to="/" />}
        </Switch>
      </Router>
    </div>
  )
}

export default App
