import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './routes'

import Dashboard from '../pages/dashboard'
import Signin from '../pages/signin'
import SignUp from '../pages/signup'
import Authentication from '../pages/authentication'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/auth/:token" component={Authentication} />
    </Switch>
  )
}
