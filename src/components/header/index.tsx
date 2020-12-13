import React from 'react'
import { BsCloudFill } from 'react-icons/bs'
import { Container, Logo, SearchInput, Logout } from './styles'
import { BiExit } from 'react-icons/bi'
import { SearchServer } from 'shared/SearchServiceContenxt'
import { signOut } from '../../store/ducks/repositories/signin/actions'
import { useDispatch } from 'react-redux'

const Header: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <SearchServer.Consumer>
      {({ setServer, server }) => (
        <Container>
          <Logo>
            <BsCloudFill />
            <strong>nuvemWEB</strong>
          </Logo>

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
        </Container>
      )}
    </SearchServer.Consumer>
  )
}

export default Header
