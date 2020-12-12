import { IUpdateResetPassword, RepositoriesTypes } from './types'

export const updateResetPasswordRequest = (data: IUpdateResetPassword) => {
  return {
    type: RepositoriesTypes.UPDATE_RESET_PASSWORD_REQUEST,
    payload: { data },
  }
}

export const updateResetPasswordFailure = () => {
  return {
    type: RepositoriesTypes.UPDATE_RESET_PASSWORD_FAILURE,
  }
}

export const updateResetPasswordSuccess = () => {
  return {
    type: RepositoriesTypes.UPDATE_RESET_PASSWORD_SUCCESS,
  }
}
