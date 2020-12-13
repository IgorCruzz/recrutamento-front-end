import react, { createContext } from 'react'

interface IExample {
  server: string
  setServer: (value?: any) => any
}

export const SearchServer = createContext({
  server: '',
  setServer: () => {},
} as IExample)
