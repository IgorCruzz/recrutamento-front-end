import { takeLatest, call, put, all } from 'redux-saga/effects'

import { api } from '../../../../services/api'
import { userCreateFailure, userCreateSuccess } from './actions'
import { RepositoriesTypes } from './types'
import { toast } from 'react-toastify'

export function* createUser(action: any) {
  try {
    yield call(api.post, 'user', action.payload.data)

    yield put(userCreateSuccess())
  } catch (e) {
    yield put(userCreateFailure())
    toast.error(e.response.data.error)
  }
}

export default all([
  takeLatest(RepositoriesTypes.USER_CREATE_REQUEST, createUser),
])
