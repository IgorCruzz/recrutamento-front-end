import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import * as redux from 'react-redux'
import React from 'react'
import UpdateResetPassword from '../../pages/resetPassword/updateResetPassword'

jest.mock('react-redux')

jest.mock('react-router-dom', () => {
  return {
    useParams: () => {
      return {
        token: 'token',
      }
    },
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

describe('UpdateResetPassword', () => {
  it('should be able to render', () => {
    expect(render(<UpdateResetPassword />)).toBeTruthy()
  })

  it('should be able to update password', async () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<UpdateResetPassword />)

    fireEvent.input(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: 'user@mail.com' },
    })

    fireEvent.input(screen.getByPlaceholderText('Insira sua nova senha'), {
      target: { value: 'password' },
    })

    fireEvent.input(screen.getByPlaceholderText('Digite sua senha novamente'), {
      target: { value: 'password' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Redefinir senha' }))

    await waitFor(() => {
      expect(dispatch).toBeCalled()
    })
  })

  it('dont dispatch the action if any field has been passed wrong', async () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<UpdateResetPassword />)

    fireEvent.input(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: '' },
    })

    fireEvent.input(screen.getByPlaceholderText('Insira sua nova senha'), {
      target: { value: '' },
    })

    fireEvent.input(screen.getByPlaceholderText('Digite sua senha novamente'), {
      target: { value: '' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Redefinir senha' }))

    await waitFor(() => {
      expect(dispatch).not.toBeCalled()
    })
  })

  it('display "carregando.." if the user has been clicked on the submit button', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation((cb) =>
      cb({
        updateResetPassword: {
          loading: true,
        },
      })
    )

    render(<UpdateResetPassword />)

    expect(
      screen.getByRole('button', { name: 'Carregando...' })
    ).toBeInTheDocument()
  })
})
