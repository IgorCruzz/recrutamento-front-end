import 'jest-extended'
import 'babel-polyfill'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import VerticalMenu from '../../components/verticalMenu'
import * as redux from 'react-redux'

jest.mock('react-redux')

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

describe('VerticalMenu', () => {
  it('should be render', () => {
    expect(render(<VerticalMenu />)).toBeTruthy()
  })

  it('should able to logout', () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<VerticalMenu />)

    fireEvent.click(screen.getByTestId('logout'))

    expect(dispatch).toBeCalled()
  })

  it('should able search for a server', () => {
    render(<VerticalMenu />)

    fireEvent.input(screen.getByPlaceholderText('Procurar servidor...'), {
      target: { value: 'server name' },
    })

    expect(screen.getByPlaceholderText('Procurar servidor...')).toBeTruthy()
  })
})
