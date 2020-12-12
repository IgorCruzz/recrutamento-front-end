import {
  INITIAL_VALUES,
  createResetPassword,
} from '../../../store/ducks/repositories/resetPassword/reducer'
import {
  createResetPasswordFailure,
  createResetPasswordRequest,
  createResetPasswordSuccess,
} from '../../../store/ducks/repositories/resetPassword/actions'

describe('CreateResetPassword', () => {
  it('createResetPasswordRequest', () => {
    const createResetPasswordData = {
      email: 'user@email.com',
    }

    const state = createResetPassword(
      INITIAL_VALUES,
      createResetPasswordRequest(createResetPasswordData)
    )

    expect(state).toStrictEqual({ loading: true })
  })

  it('createResetPasswordSuccess', () => {
    const state = createResetPassword(
      INITIAL_VALUES,
      createResetPasswordSuccess()
    )

    expect(state).toStrictEqual({ loading: false })
  })

  it('createResetPasswordFailure', () => {
    const state = createResetPassword(
      INITIAL_VALUES,
      createResetPasswordFailure()
    )

    expect(state).toStrictEqual({ loading: false })
  })

  it('DEFAULT', () => {
    const state = createResetPassword(undefined, {})

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
})
