import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../../services/api'
import {
  updateResetPasswordFailure,
  updateResetPasswordSuccess,
} from './actions'
import { RepositoriesTypes } from './types'
import { toast } from 'react-toastify'

export function* updateResetPassword(action: any) {
  try {
    const { token } = action.payload.data

    const res = yield call(
      api.put,
      `resetPassword/${token}`,
      action.payload.data
    )

    const { message } = res.data

    yield put(updateResetPasswordSuccess())

    toast.success(message)
  } catch (e) {
    yield put(updateResetPasswordFailure())
    toast.error(e.response.data.error)
  }
}

export default all([
  takeLatest(
    RepositoriesTypes.UPDATE_RESET_PASSWORD_REQUEST,
    updateResetPassword
  ),
])
