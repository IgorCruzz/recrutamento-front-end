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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Content = styled.div`
  animation: 1s ${opacityAnimation} ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(12, 20, 36, 0.85);
  padding: 30px;
  border-radius: 15px;

  h1 {
    color: #ffffff;
    margin-bottom: 50px;
    text-align: center;
    font-size: 5rem;
  }

  form {
    width: 100%;

    input {
      border-radius: 25px;
      border: 0;
      margin: 5px 0;
      padding-left: 15px;
      height: 40px;
      width: 100%;

      :focus {
        border: #3f3071 3px solid;
      }
    }

    button {
      margin-top: 20px;
      height: 40px;
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

  p {
    color: #ffffff;
    margin-top: 15px;

    a {
      text-decoration: none;
      color: #3ca5bc;

      &:hover {
        color: ${darken(0.1, '#3CA5BC')};
      }
    }
  }
`
