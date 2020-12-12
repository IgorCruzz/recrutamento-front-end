import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Content, Error } from './styles'
import { FiAlertTriangle } from 'react-icons/fi'

interface Props {
  name: string
  children?: React.ReactNode
  stateName?: any
}
type InputProps = JSX.IntrinsicElements['input'] & Props

export const Input: React.FC<InputProps> = ({ name, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField])
  return (
    <Content>
      <input
        id={error ? 'error' : fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <Error data-testid="error">
          <FiAlertTriangle />
          {error}
        </Error>
      )}
    </Content>
  )
}
