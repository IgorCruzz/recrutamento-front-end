import React from 'react'
import { BsCloudFill } from 'react-icons/bs'
import { Container, Logo, Main, SearchInput, Logout } from './styles'
import { Link } from 'react-router-dom'
import { GoDashboard } from 'react-icons/go'
import { BiExit } from 'react-icons/bi'
const VerticalMenu: React.FC = () => {
  return (
    <Container>
      <div>
        <Logo>
          <BsCloudFill />
          <strong>nuvemWEB</strong>
        </Logo>

        <Main>
          <Link to="/dashboard">
            <GoDashboard /> <strong>Dashboard</strong>
          </Link>
        </Main>
      </div>
      <div>
        <SearchInput>
          <input type="search" placeholder="Procurar servidor..." />
        </SearchInput>

        <Logout>
          <button type="button">
            <BiExit />
          </button>
        </Logout>
      </div>
    </Container>
  )
}

export default VerticalMenu
