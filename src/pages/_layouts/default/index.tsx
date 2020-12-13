import React, { ReactNode } from 'react'

import { Wrapper } from './styles'
import VerticalMenu from '../../../components/verticalMenu'
import Header from '../../../components/header'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <VerticalMenu />
      {children}
    </Wrapper>
  )
}
