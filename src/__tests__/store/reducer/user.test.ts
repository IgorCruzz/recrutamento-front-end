import {
  userCreateFailure,
  userCreateRequest,
  userCreateSuccess,
} from '../../../store/ducks/repositories/user/actions'
import {
  signInSuccess,
  signOut,
} from '../../../store/ducks/repositories/signin/actions'
import {
  INITIAL_VALUES,
  user,
} from '../../../store/ducks/repositories/user/reducer'

describe('User', () => {
  it('userCreateRequest', () => {
    const state = user(
      INITIAL_VALUES,
      userCreateRequest({
        email: 'user@email',
      })
    )

    expect(state).toStrictEqual({ loading: true, profile: [] })
  })

  it('userCreateSuccess', () => {
    const state = user(INITIAL_VALUES, userCreateSuccess())

    expect(state).toStrictEqual({ loading: false, profile: [] })
  })

  it('userCreateFailure', () => {
    const state = user(INITIAL_VALUES, userCreateFailure())

    expect(state).toStrictEqual({ loading: false, profile: [] })
  })

  it('signInSuccess', () => {
    const signInData = {
      token: 'token',
      user: {
        id: 1,
        email: 'user@email.com',
      },
    }
    const state = user(
      INITIAL_VALUES,
      signInSuccess(signInData.token, signInData.user)
    )

    expect(state).toStrictEqual({
      loading: false,
      profile: { id: 1, email: 'user@email.com' },
    })
  })

  it('signOut', () => {
    const state = user(INITIAL_VALUES, signOut())

    expect(state).toStrictEqual({ loading: false, profile: [] })
  })

  it('DEFAULT', () => {
    const state = user(undefined, {})

    expect(state).toStrictEqual(INITIAL_VALUES)
  })
})
