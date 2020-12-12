import 'babel-polyfill'
import MockAdapter from 'axios-mock-adapter'
import { runSaga } from 'redux-saga'
import {
  userCreateSuccess,
  userCreateFailure,
} from '../../../store/ducks/repositories/user/actions'
import { createUser } from '../../../store/ducks/repositories/user/sagas'
import { api } from '../../../services/api'
import { toast } from 'react-toastify'

const apiMock = new MockAdapter(api)

describe('User', () => {
  it('createUser', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'success')

    apiMock.onPost('user').reply(201, {
      id: 1,
      email: 'user@email.com',
    })

    await runSaga({ dispatch }, createUser, {
      payload: {
        data: {
          email: 'user@email.com',
        },
      },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(userCreateSuccess())
    expect(toastMock).toBeCalled()
  })

  it('createUser / throw an error if any has wrong', async () => {
    try {
      const dispatch = jest.fn()

      apiMock.onPost('user').reply(400, { error: 'error message' })

      await runSaga({ dispatch }, createUser, {
        payload: {
          data: {
            email: 'user@email.com',
          },
        },
      }).toPromise()
    } catch (err) {
      const toastMock = jest.spyOn(toast, 'error')
      expect(userCreateFailure).toHaveBeenCalled()
      expect(toastMock).toHaveBeenCalledWith(err.response.data.error)
    }
  })
})
