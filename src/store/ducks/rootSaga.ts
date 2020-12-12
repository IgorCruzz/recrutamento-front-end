import { all } from 'redux-saga/effects'

import signIn from './repositories/signin/sagas'
import user from './repositories/user/sagas'

export default function* rootSaga() {
  return yield all({
    signIn,
    user,
  })
}
