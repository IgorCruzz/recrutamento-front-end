import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  padding: 25px;
  width: 100%;

  color: #1c1c1c;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    margin-bottom: 15px;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h1 {
    margin-top: 5px;

    @media (max-width: 500px) {
      font-size: 3rem;
      margin-bottom: 10px;
    }

    font-size: 6rem;
  }
`

export const Titles = styled.div`
  @media (max-width: 1270px) {
    display: none;
  }
  display: grid;
  grid-template-columns:
    minmax(200px, 250px) minmax(170px, 220px) minmax(120px, 150px) minmax(
      170px,
      200px
    )
    minmax(130px, 140px) minmax(70px, 100px) 150px 80px;
  width: 100%;
  height: 35px;
  background: rgb(247, 247, 247);

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: rgb(85, 85, 85);
  }
`
export const List = styled.div`
  @media (max-width: 1270px) {
    display: flex;
    flex-direction: column;

    p {
      margin-left: 10px;
      small {
        font-weight: bold;
        margin-right: 5px;
      }
    }
  }

  @media (min-width: 1270px) {
    small {
      display: none;
    }
  }

  display: grid;
  grid-template-columns:
    minmax(200px, 250px) minmax(170px, 220px) minmax(120px, 150px) minmax(
      170px,
      200px
    )
    minmax(130px, 140px) minmax(70px, 100px) 150px 80px;
  width: 100%;
  background: #ffffff;
  border-bottom: 4px solid rgb(247, 247, 247);

  &:hover {
    background: rgb(247, 247, 247);
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding-left: 5px;
    color: #363636;
  }
`
export const ServersList = styled.div`
  overflow: auto;
  height: 285px;
`

interface TitleProps {
  readonly load: boolean
}

export const Loading = styled.div<TitleProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  z-index: 999;

  display: ${({ load }) => (load ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #ffffff;
  }
`
