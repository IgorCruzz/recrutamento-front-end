import React, { ReactNode } from 'react'

import { Wrapper } from './styles'
import VerticalMenu from '../../../components/verticalMenu'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <VerticalMenu />
      {children}
    </Wrapper>
  )
}
