import 'babel-polyfill'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import * as redux from 'react-redux'
import React from 'react'
import SignUp from '../../pages/signup'

jest.mock('react-redux')

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

describe('Signup', () => {
  it('should be able to render', () => {
    expect(render(<SignUp />)).toBeTruthy()
  })

  it('should be able to create an account', async () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<SignUp />)

    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: { value: 'user@gmail.com' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Cadastrar' }))

    await waitFor(() => {
      expect(dispatch).toBeCalled()
    })
  })

  it('dont dispatch the action if any field has been passed wrong', async () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<SignUp />)

    fireEvent.input(screen.getByPlaceholderText('Nome'), {
      target: { value: '' },
    })

    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: { value: '' },
    })

    fireEvent.input(screen.getByPlaceholderText('Senha'), {
      target: { value: '' },
    })

    fireEvent.input(screen.getByPlaceholderText('Confirmar Senha'), {
      target: { value: '' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Cadastrar' }))

    await waitFor(() => {
      expect(dispatch).not.toBeCalled()
    })
  })

  it('display "carregando.." if the user has been clicked on the submit button', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation((cb) =>
      cb({
        user: {
          loading: true,
        },
      })
    )

    render(<SignUp />)

    expect(
      screen.getByRole('button', { name: 'Carregando...' })
    ).toBeInTheDocument()
  })
})
