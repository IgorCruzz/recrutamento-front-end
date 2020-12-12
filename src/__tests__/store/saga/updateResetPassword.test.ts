import 'babel-polyfill'
import MockAdapter from 'axios-mock-adapter'
import { runSaga } from 'redux-saga'
import {
  updateResetPasswordFailure,
  updateResetPasswordSuccess,
} from '../../../store/ducks/repositories/updateResetPassword/actions'
import { updateResetPassword } from '../../../store/ducks/repositories/updateResetPassword/sagas'
import { api } from '../../../services/api'
import { toast } from 'react-toastify'

const apiMock = new MockAdapter(api)

describe('UpdateResetPassword', () => {
  it('updateResetPassword', async () => {
    const dispatch = jest.fn()
    const toastMock = jest.spyOn(toast, 'success')

    global.window = Object.create(window)
    const url = 'http://localhost'
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
      },
      writable: true,
    })

    apiMock.onPut('/resetPassword/token').reply(201, {
      message: 'Senha atualizada com sucesso!',
    })

    await runSaga({ dispatch }, updateResetPassword, {
      payload: {
        data: {
          token: 'token',
          email: 'user@gmail.com',
          password: 'password',
          confirmPassword: 'password',
        },
      },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(updateResetPasswordSuccess())
    expect(toastMock).toBeCalled()
  })

  it('updateResetPassword -> throw an error if any has wrong', async () => {
    try {
      const dispatch = jest.fn()

      global.window = Object.create(window)
      const url = 'http://localhost'
      Object.defineProperty(window, 'location', {
        value: {
          href: url,
        },
        writable: true,
      })

      apiMock.onPut('/resetPassword/token').reply(401, {
        error: 'error message',
      })

      await runSaga({ dispatch }, updateResetPassword, {
        payload: {
          data: {
            token: 'token',
            email: 'user@gmail.com',
            password: 'password',
            confirmPassword: 'password',
          },
        },
      }).toPromise()
    } catch (err) {
      const toastMock = jest.spyOn(toast, 'error')
      expect(updateResetPasswordFailure).toHaveBeenCalled()
      expect(toastMock).toHaveBeenCalled()
    }
  })
})
