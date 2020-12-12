import { combineReducers } from 'redux'
import { signIn } from './repositories/signin/reducer'
import { user } from './repositories/user/reducer'

export default combineReducers({
  signIn,
  user,
})
