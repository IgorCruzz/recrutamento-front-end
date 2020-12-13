import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  padding: 25px;
  background: white;
  width: 100%;
  height: 25%;
  color: #1c1c1c;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 6rem;
  }
`

export const Titles = styled.div`
  display: grid;
  grid-template-columns: 200px 220px 150px 200px 140px 140px 80px;
  width: 100%;
  height: 35px;
  background: rgb(247, 247, 247);

  p {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: rgb(85, 85, 85);
    padding-left: 5px;
  }
`
export const List = styled.div`
  display: grid;
  grid-template-columns: 200px 220px 150px 200px 140px 140px 80px;
  width: 100%;
  background: #ffffff;
  border-bottom: 4px solid rgb(247, 247, 247);

  &:hover {
    background: rgb(247, 247, 247);
  }

  p {
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 5px;
    color: #363636;
  }
`
export const ServersList = styled.div`
  overflow: auto;
  height: 460px;
`
