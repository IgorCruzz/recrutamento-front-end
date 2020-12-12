import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const opacityAnimation = keyframes`
  0% {
    right:0px;
  }
  25% {
    left:200px;
    top:0px;
  }
`

export const Content = styled.div`
  @media (max-width: 950px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  background: rgba(12, 20, 36, 0.85);
  border-radius: 15px;
  padding: 25px;
  display: flex;
  width: 70%;
  animation-name: ${opacityAnimation};
  animation-duration: 4s;
  animation-iteration-count: 3;
  justify-content: space-between;
  margin: 30px;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      border-radius: 25px;
      border: 0;
      margin: 5px;
      padding-left: 15px;
      height: 50px;
      width: 100%;

      :focus {
        border: #3f3071 3px solid;
      }
    }

    button {
      margin-top: 20px;
      height: 50px;
      width: 100%;
      border-radius: 25px;
      border: 0;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
      background: #3f3071;

      &:hover {
        background: ${darken(0.1, '#3F3071')};
      }
    }
  }
`
export const Title = styled.div`
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    width: 80%;
  }

  margin-right: 50px;

  h1 {
    @media (max-width: 950px) {
      margin-bottom: 20px;
    }

    color: #ffffff;
    margin-bottom: 50px;
    text-align: center;
    font-size: 6rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;

    display: flex;
    align-items: center;

    &:hover {
      color: #3ca5bc;
    }

    svg {
      margin-right: 10px;
    }
  }
`
export const Message = styled.span`
  color: #ffffff;

  text-align: center;
`
