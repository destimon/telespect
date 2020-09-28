import React, { useEffect } from 'react'
import { MTProto } from '@mtproto/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'

const App = () => {
  useEffect(() => {
    const api_id = 1207761
    const api_hash = '1acd94c546fd916fa25b73145be69da3'

    // 1. Create an instance
    const mtproto = new MTProto({
      api_id,
      api_hash,
    })

    // 3. Get the user country code
    mtproto.call('help.getNearestDc', {}).then(result => {
      console.log(`country:`, result)
    })
  }, [])

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
