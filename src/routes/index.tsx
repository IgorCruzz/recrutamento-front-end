import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './routes'

import Signin from '../pages/signin'
import SignUp from '../pages/signup'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  )
}
