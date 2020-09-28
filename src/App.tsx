import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'

const App = () => {
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
