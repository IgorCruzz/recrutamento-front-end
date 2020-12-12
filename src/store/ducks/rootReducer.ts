import { combineReducers } from 'redux'
import { signIn } from './repositories/signin/reducer'
import { user } from './repositories/user/reducer'
import { createResetPassword } from './repositories/resetPassword/reducer'

export default combineReducers({
  signIn,
  user,
  createResetPassword,
})
