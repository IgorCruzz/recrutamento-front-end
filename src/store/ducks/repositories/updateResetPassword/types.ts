export enum RepositoriesTypes {
  UPDATE_RESET_PASSWORD_REQUEST = '@updateResetPassword/UPDATE_RESET_PASSWORD_REQUEST',
  UPDATE_RESET_PASSWORD_SUCCESS = '@updateResetPassword/UPDATE_RESET_PASSWORD_SUCCESS',
  UPDATE_RESET_PASSWORD_FAILURE = '@updateResetPassword/UPDATE_RESET_PASSWORD_FAILURE',
}

export interface IUpdateResetPassword {
  token: string
  email: string
  password: string
  confirmPassword: string
}

export interface IUpdateResetPasswordState {
  updateResetPassword: {
    loading: boolean
  }
}
