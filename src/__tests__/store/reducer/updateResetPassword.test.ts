import {
  INITIAL_VALUES,
  updateResetPassword,
} from '../../../store/ducks/repositories/updateResetPassword/reducer'
import {
  updateResetPasswordRequest,
  updateResetPasswordFailure,
  updateResetPasswordSuccess,
} from '../../../store/ducks/repositories/updateResetPassword/actions'

describe('UpdateResetPassword', () => {
  it('updateResetPasswordRequest', () => {
    const updateResetPasswordData = {
      token: 'token',
      email: 'user@email.com',
      password: 'password',
      confirmPassword: 'password',
    }

    const state = updateResetPassword(
      INITIAL_VALUES,
      updateResetPasswordRequest(updateResetPasswordData)
    )

    expect(state).toStrictEqual({ loading: true })
  })

  it('updateResetPasswordSuccess', () => {
    const state = updateResetPassword(
      INITIAL_VALUES,
      updateResetPasswordSuccess()
    )

    expect(state).toStrictEqual({ loading: false })
  })

  it('updateResetPasswordFailure', () => {
    const state = updateResetPassword(
      INITIAL_VALUES,
      updateResetPasswordFailure()
    )

    expect(state).toStrictEqual({ loading: false })
  })

  it('DEFAULT', () => {
    const state = updateResetPassword(undefined, {})

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
})
