export enum RepositoriesTypes {
  CREATE_RESET_PASSWORD_REQUEST = '@createResetPassword/CREATE_RESET_PASSWORD_REQUEST',
  CREATE_RESET_PASSWORD_SUCCESS = '@createResetPassword/CREATE_RESET_PASSWORD_SUCCESS',
  CREATE_RESET_PASSWORD_FAILURE = '@createResetPassword/CREATE_RESET_PASSWORD_FAILURE',
}

export interface IUserCreate {
  email: string
}

export interface IUserState {
  user: {
    loading: boolean
    profile: {
      id: number
      email: string
    }
  }
}
