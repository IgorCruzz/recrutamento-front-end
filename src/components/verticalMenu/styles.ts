import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
  height: 100%;
  width: 20%;
  background: #202020;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Logo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 0.3px solid #4f4f4f;
  font-size: 3.5rem;
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
  position: relative;
  input {
    margin-bottom: 20px;
    background: #363636;
    width: 90%;
    height: 40px;
    border-radius: 20px;
    border: 0;
    padding-left: 15px;
    font-size: 1rem;
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
  margin-bottom: 40px;
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
