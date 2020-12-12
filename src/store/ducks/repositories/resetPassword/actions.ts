import { ICreateResetPassword, RepositoriesTypes } from './types'

export const createResetPasswordRequest = (data: ICreateResetPassword) => {
  return {
    type: RepositoriesTypes.CREATE_RESET_PASSWORD_REQUEST,
    payload: { data },
  }
}

export const createResetPasswordFailure = () => {
  return {
    type: RepositoriesTypes.CREATE_RESET_PASSWORD_FAILURE,
  }
}

export const createResetPasswordSuccess = () => {
  return {
    type: RepositoriesTypes.CREATE_RESET_PASSWORD_SUCCESS,
  }
}
