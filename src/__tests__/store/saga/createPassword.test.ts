import 'babel-polyfill'
import MockAdapter from 'axios-mock-adapter'
import { runSaga } from 'redux-saga'
import {
  createPasswordFailure,
  createPasswordSuccess,
} from '../../../store/ducks/repositories/createPassword/actions'
import { createPassword } from '../../../store/ducks/repositories/createPassword/sagas'
import { api } from '../../../services/api'
import { toast } from 'react-toastify'

const apiMock = new MockAdapter(api)

describe('createPassword', () => {
  it('createPassword', async () => {
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

    apiMock.onPut('/password/code').reply(201, {
      message: 'Senha atualizada com sucesso!',
    })

    await runSaga({ dispatch }, createPassword, {
      payload: {
        data: {
          code: 'code',
          email: 'user@gmail.com',
          password: 'password',
          confirmPassword: 'password',
        },
      },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(createPasswordSuccess())
    expect(toastMock).toBeCalled()
  })

  it('createPassword -> throw an error if any has wrong', async () => {
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

      apiMock.onPut('/resetPassword/token').reply(400, {
        error: 'error message',
      })

      await runSaga({ dispatch }, createPassword, {
        payload: {
          data: {
            code: 'code',
            email: 'user@gmail.com',
            password: 'password',
            confirmPassword: 'password',
          },
        },
      }).toPromise()
    } catch (err) {
      const toastMock = jest.spyOn(toast, 'error')
      expect(createPasswordFailure).toHaveBeenCalled()
      expect(toastMock).toHaveBeenCalled()
    }
  })
})
