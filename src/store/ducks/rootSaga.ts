import { all } from 'redux-saga/effects'

import signIn from './repositories/signin/sagas'
import user from './repositories/user/sagas'
import createResetPassword from './repositories/resetPassword/sagas'

export default function* rootSaga() {
  return yield all({
    signIn,
    user,
    createResetPassword,
  })
}
