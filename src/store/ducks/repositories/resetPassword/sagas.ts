import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../../services/api'
import {
  createResetPasswordFailure,
  createResetPasswordSuccess,
} from './actions'
import { RepositoriesTypes } from './types'
import { toast } from 'react-toastify'

export function* createResetPassword(action: any) {
  try {
    yield call(api.post, 'resetPassword', action.payload.data)

    yield put(createResetPasswordSuccess())

    toast.success('Por favor, verifique o código enviado para o seu e-mail.')
  } catch (e) {
    yield put(createResetPasswordFailure())
    toast.error(e.response.data.error)
  }
}

export default all([
  takeLatest(
    RepositoriesTypes.CREATE_RESET_PASSWORD_REQUEST,
    createResetPassword
  ),
])
