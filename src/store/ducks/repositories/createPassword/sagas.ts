import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../../services/api'
import { createPasswordFailure, createPasswordSuccess } from './actions'
import { RepositoriesTypes } from './types'
import { toast } from 'react-toastify'

export function* createPassword(action: any) {
  try {
    const { code } = action.payload.data

    const res = yield call(api.put, `password/${code}`, action.payload.data)

    const { message } = res.data

    yield put(createPasswordSuccess())

    toast.success(message)

    window.location.href = '/'
  } catch (e) {
    yield put(createPasswordFailure())
    toast.error(e.response.data.error)
  }
}

export default all([
  takeLatest(RepositoriesTypes.CREATE_PASSWORD_REQUEST, createPassword),
])
