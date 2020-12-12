import React, { ReactNode } from 'react'

import { Wrapper } from './styles'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>
}
