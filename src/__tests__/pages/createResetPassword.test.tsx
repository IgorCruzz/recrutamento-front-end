import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import * as redux from 'react-redux'
import React from 'react'
import CreateResetPassword from '../../pages/resetPassword/createResetPassword'

jest.mock('react-redux')

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

describe('CreateResetPassword', () => {
  it('should be able to render', () => {
    expect(render(<CreateResetPassword />)).toBeTruthy()
  })

  it('should be able to login', async () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<CreateResetPassword />)

    fireEvent.input(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: 'user@mail.com' },
    })

    fireEvent.click(
      screen.getByRole('button', { name: 'Enviar código de redefinição' })
    )

    await waitFor(() => {
      expect(dispatch).toBeCalled()
    })
  })

  it('dont dispatch the action if any field has been passed wrong', async () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<CreateResetPassword />)

    fireEvent.input(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: '' },
    })

    fireEvent.click(
      screen.getByRole('button', { name: 'Enviar código de redefinição' })
    )

    await waitFor(() => {
      expect(dispatch).not.toBeCalled()
    })
  })

  it('display "carregando.." if the user has been clicked on the submit button', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation((cb) =>
      cb({
        createResetPassword: {
          loading: true,
        },
      })
    )

    render(<CreateResetPassword />)

    expect(
      screen.getByRole('button', { name: 'Carregando...' })
    ).toBeInTheDocument()
  })
})
