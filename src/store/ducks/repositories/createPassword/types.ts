export enum RepositoriesTypes {
  CREATE_PASSWORD_REQUEST = '@createPassword/CREATE_PASSWORD_REQUEST',
  CREATE_PASSWORD_SUCCESS = '@createPassword/CREATE_PASSWORD_SUCCESS',
  CREATE_PASSWORD_FAILURE = '@createPassword/CREATE_PASSWORD_FAILURE',
}

export interface ICreatePassword {
  token: string
  email: string
  password: string
  confirmPassword: string
}

export interface ICreatePasswordState {
  createPassword: {
    loading: boolean
  }
}
