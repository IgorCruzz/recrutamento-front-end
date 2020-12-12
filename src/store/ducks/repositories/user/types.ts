export enum RepositoriesTypes {
  USER_CREATE_REQUEST = '@user/SIGNUP_REQUEST',
  USER_CREATE_SUCESS = '@user/SIGNUP_SUCCESS',
  USER_CREATE_FAILURE = '@user/SIGNUP_FAILURE',
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
