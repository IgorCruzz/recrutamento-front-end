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

export const Aside = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  img {
    width: 500px;
  }
`

export const SignIn = styled.div`
  @media (max-width: 1000px) {
    width: 80%;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  svg {
    width: 100px;
    height: 100px;
    color: #ffffff;
    margin-bottom: 40px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      border-radius: 25px;
      border: 0;
      margin: 10px 0;
      padding-left: 15px;
      height: 40px;
      width: 100%;
      font-size: 1.5rem;
      :focus {
        border: #3f3071 3px solid;
      }
    }
    button {
      font-size: 1.5rem;
      margin-top: 20px;
      height: 40px;
      width: 100%;
      border-radius: 25px;
      border: 0;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
      background: #3846bc;
      &:hover {
        background: rgba(56, 70, 188, 0.47);
      }
    }
  }
  p {
    color: #ffffff;
    margin-top: 15px;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: #3ca5bc;
      &:hover {
        color: ${darken(0.1, '#3CA5BC')};
      }
    }
  }
`

export const Content = styled.div`
  @media (max-width: 500px) {
    width: 80%;
  }
  animation: 1s ${opacityAnimation} ease-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(12, 20, 36, 0.85);
  padding: 20px;
  border-radius: 15px;
  height: 500px;
  width: 60%;
  h1 {
    color: #ffffff;
    margin-bottom: 50px;
    text-align: center;
    font-size: 5rem;
  }
`
