import {
  INITIAL_VALUES,
  createPassword,
} from '../../../store/ducks/repositories/createPassword/reducer'
import {
  createPasswordFailure,
  createPasswordRequest,
  createPasswordSuccess,
} from '../../../store/ducks/repositories/createPassword/actions'

describe('createPassword', () => {
  it('createPasswordRequest', () => {
    const createPasswordData = {
      code: 'code',
      email: 'user@email.com',
      password: 'password',
      confirmPassword: 'password',
    }

    const state = createPassword(
      INITIAL_VALUES,
      createPasswordRequest(createPasswordData)
    )

    expect(state).toStrictEqual({ loading: true })
  })

  it('createPasswordSuccess', () => {
    const state = createPassword(INITIAL_VALUES, createPasswordSuccess())

    expect(state).toStrictEqual({ loading: false })
  })

  it('createPasswordFailure', () => {
    const state = createPassword(INITIAL_VALUES, createPasswordFailure())

    expect(state).toStrictEqual({ loading: false })
  })

  it('DEFAULT', () => {
    const state = createPassword(undefined, {})

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
})
