import React from 'react'
import { BsCloudFill } from 'react-icons/bs'
import { Container, Logo, Main, SearchInput, Logout } from './styles'
import { Link } from 'react-router-dom'
import { GoDashboard } from 'react-icons/go'
import { BiExit } from 'react-icons/bi'
import { SearchServer } from 'shared/SearchServiceContenxt'
import { signOut } from '../../store/ducks/repositories/signin/actions'
import { useDispatch } from 'react-redux'

const VerticalMenu: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <SearchServer.Consumer>
      {({ setServer, server }) => (
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
              <input
                type="search"
                value={server}
                onChange={(e: any) => setServer(e.target.value)}
                placeholder="Procurar servidor..."
              />
            </SearchInput>

            <Logout>
              <button
                data-testid="logout"
                onClick={() => dispatch(signOut())}
                type="button">
                <BiExit />
              </button>
            </Logout>
          </div>
        </Container>
      )}
    </SearchServer.Consumer>
  )
}

export default VerticalMenu
