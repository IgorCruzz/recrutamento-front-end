import produce from 'immer'
import { RepositoriesTypes } from './types'

export const INITIAL_VALUES = {
  loading: false,
}

export function createPassword(state = INITIAL_VALUES, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case RepositoriesTypes.CREATE_PASSWORD_REQUEST: {
        draft.loading = true
        break
      }
      case RepositoriesTypes.CREATE_PASSWORD_SUCCESS: {
        draft.loading = false
        break
      }
      case RepositoriesTypes.CREATE_PASSWORD_FAILURE: {
        draft.loading = false
        break
      }
      default:
    }
  })
}
