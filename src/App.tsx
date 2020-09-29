import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import { createMTProto } from './store/actions/userAction'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(createMTProto());
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
