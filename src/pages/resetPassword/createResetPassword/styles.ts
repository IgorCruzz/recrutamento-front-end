import styled, { keyframes } from 'styled-components'

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
  @media (max-width: 950px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  background: rgba(12, 20, 36, 0.85);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  width: 50%;
  animation: 1s ${opacityAnimation} ease-out;
  justify-content: space-between;
  margin: 30px;
  flex-direction: column;
  align-items: center;

  form {
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      border-radius: 25px;
      border: 0;
      margin-top: 15px;
      padding-left: 15px;
      height: 50px;
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
    font-size: 4rem;
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
  color: #a9a9a9;
  font-size: 1.5rem;
  text-align: center;
`
