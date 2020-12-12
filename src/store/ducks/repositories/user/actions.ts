import { RepositoriesTypes, IUserCreate } from './types'

export const userCreateRequest = (data: IUserCreate) => {
  return {
    type: RepositoriesTypes.USER_CREATE_REQUEST,
    payload: { data },
  }
}

export const userCreateSuccess = () => {
  return {
    type: RepositoriesTypes.USER_CREATE_SUCESS,
  }
}

export const userCreateFailure = () => {
  return {
    type: RepositoriesTypes.USER_CREATE_FAILURE,
  }
}
