import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './routes'

import Signin from '../pages/signin'
import SignUp from '../pages/signup'
import CreateResetPasword from '../pages/resetPassword/createResetPassword'
import UpdateResetPasword from '../pages/resetPassword/updateResetPassword'
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={SignUp} />
      <Route path="/resetPassword" component={CreateResetPasword} />
      <Route path="/updatePassword/:token" component={UpdateResetPasword} />
    </Switch>
  )
}
