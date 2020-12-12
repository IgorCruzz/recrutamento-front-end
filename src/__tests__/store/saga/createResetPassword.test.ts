import 'babel-polyfill'
import MockAdapter from 'axios-mock-adapter'
import { runSaga } from 'redux-saga'
import { createResetPasswordSuccess } from '../../../store/ducks/repositories/resetPassword/actions'
import { createResetPassword } from '../../../store/ducks/repositories/resetPassword/sagas'
import { api } from '../../../services/api'
import { toast } from 'react-toastify'

const apiMock = new MockAdapter(api)

describe('CreateResetPassword', () => {
  it('createResetPassword', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'success')

    apiMock.onPost('/resetPassword').reply(201, {
      resetToken: 'token',
    })

    await runSaga({ dispatch }, createResetPassword, {
      payload: {
        data: {
          email: 'user@gmail.com',
        },
      },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(createResetPasswordSuccess())
    expect(toastMock).toBeCalled()
  })

  it('createResetPassword -> throw an error if any has wrong', async () => {
    try {
      const dispatch = jest.fn()

      apiMock.onPost('signin').reply(401, {
        error: 'error message',
      })

      await runSaga({ dispatch }, createResetPassword, {
        payload: {
          data: {
            email: 'user@gmail.com',
          },
        },
      }).toPromise()
    } catch (err) {
      const toastMock = jest.spyOn(toast, 'error')

      expect(toastMock).toHaveBeenCalled()
    }
  })
})
