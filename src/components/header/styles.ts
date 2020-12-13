import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  @media (min-width: 950px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #202020;
  width: 100%;
`
export const Logo = styled.div`
  @media (max-width: 400px) {
    width: 80%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  font-size: 1.5rem;
`

export const Main = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${darken(0.3, '#ffffff')};
    }

    svg {
      margin-right: 5px;
    }
    text-decoration: none;
    color: #ffffff;
    font-size: 2rem;
  }
`
export const SearchInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    @media (max-width: 400px) {
      width: 100%;
      margin-right: 5px;
    }

    background: #363636;
    width: 90%;
    height: 40px;
    border-radius: 20px;
    border: 0;
    padding-left: 15px;
    font-size: 1.5rem;
    padding-right: 25px;
    color: #ffffff;

    ::-webkit-search-results-decoration {
      display: none;
    }

    ::-webkit-search-decoration {
      display: none;
    }

    ::-webkit-search-cancel-button {
      display: none;
    }

    ::placeholder {
      font-size: 1.5rem;
    }
  }
`
export const Logout = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    color: #ffffff;
    border: 0;
    font-size: 4rem;

    &:hover {
      background: #363636;
    }
  }
`
