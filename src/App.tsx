import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import Home from './components/Home/Home'
import { Navbar } from './layout/Navbar'
import { createMTProto } from './store/actions/userAction'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(createMTProto())
  }, [dispatch])

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
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
