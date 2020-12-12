import 'jest-extended'
import 'babel-polyfill'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Input } from '../../components/input'
import * as unform from '@unform/core'

describe('Inputs', () => {
  describe('Input', () => {
    it('should be render', () => {
      jest.spyOn(unform, 'useField').mockReturnValue({
        fieldName: 'name',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
        clearError: jest.fn(),
      })

      render(<Input name="name" placeholder="name" />)

      expect(screen.getByPlaceholderText('name')).toBeTruthy()
    })

    it('change input border color if has received an error', async () => {
      jest.spyOn(unform, 'useField').mockReturnValue({
        fieldName: 'name',
        defaultValue: '',
        error: 'error message',
        registerField: jest.fn(),
        clearError: jest.fn(),
      })

      render(<Input name="name" placeholder="name" />)

      await screen.findByTestId('error')

      expect(screen.getByTestId('error')).toBeInTheDocument()
    })
  })
})
