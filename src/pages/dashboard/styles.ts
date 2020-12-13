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
    margin-top: 10px;

    @media (max-width: 500px) {
      font-size: 3rem;
    }

    font-size: 6rem;
  }
`

export const Titles = styled.div`
  @media (max-width: 1030px) {
    display: none;
  }
  display: grid;
  grid-template-columns:
    minmax(200px, 250px) minmax(170px, 220px) minmax(120px, 150px) minmax(
      170px,
      200px
    )
    minmax(130px, 140px) 80px;
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
  @media (max-width: 1030px) {
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

  @media (min-width: 1030px) {
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
    minmax(130px, 140px) 80px;
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

interface TitleProps {
  readonly load: boolean
}

export const Loading = styled.div<TitleProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;

  display: ${({ load }) => (load ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #ffffff;
  }
`
