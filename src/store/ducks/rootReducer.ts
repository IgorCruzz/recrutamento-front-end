import { combineReducers } from 'redux'
import { signIn } from './repositories/signin/reducer'
import { user } from './repositories/user/reducer'
import { createResetPassword } from './repositories/resetPassword/reducer'
import { updateResetPassword } from './repositories/updateResetPassword/reducer'
import { createPassword } from './repositories/createPassword/reducer'

export default combineReducers({
  signIn,
  user,
  createResetPassword,
  updateResetPassword,
  createPassword,
})
