import { ICreatePassword, RepositoriesTypes } from './types'

export const createPasswordRequest = (data: ICreatePassword) => {
  return {
    type: RepositoriesTypes.CREATE_PASSWORD_REQUEST,
    payload: { data },
  }
}

export const createPasswordFailure = () => {
  return {
    type: RepositoriesTypes.CREATE_PASSWORD_FAILURE,
  }
}

export const createPasswordSuccess = () => {
  return {
    type: RepositoriesTypes.CREATE_PASSWORD_SUCCESS,
  }
}
