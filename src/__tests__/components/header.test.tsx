import 'jest-extended'
import 'babel-polyfill'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Header from '../../components/header'
import * as redux from 'react-redux'

jest.mock('react-redux')

describe('Header', () => {
  it('should be render.', () => {
    expect(render(<Header />)).toBeTruthy()
  })

  it('should able to logout', () => {
    const dispatch = jest.fn()

    jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatch)

    render(<Header />)

    fireEvent.click(screen.getByTestId('logout'))

    expect(dispatch).toBeCalled()
  })
})
