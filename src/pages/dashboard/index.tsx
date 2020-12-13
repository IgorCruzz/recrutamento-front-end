import React from 'react'
import { Helmet } from 'react-helmet'

import { Container, Header, Titles, List, ServersList } from './styles'
import { BsServer } from 'react-icons/bs'

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Container>
        <Header>
          <strong>/dashboard</strong>
          <h1>
            <BsServer />
            Lista de servidores
          </h1>
        </Header>

        <Titles>
          <p>ID</p>
          <p>INSTANCIA</p>
          <p>TIPO</p>
          <p>TEMPO</p>
          <p>IP PRIVADO</p>
          <p>IP PUBLÍCO</p>
          <p>STATUS</p>
        </Titles>

        <ServersList>
          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>

          <List>
            <p>CLI-350682-DB01</p>
            <p>i-04da3073d034c99a7</p>
            <p>t3.medium</p>
            <p>11/12/2020 08:16:43</p>
            <p>172.30.1.252</p>
            <p>172.30.1.252</p>
            <p>Off</p>
          </List>
        </ServersList>
      </Container>
    </>
  )
}

export default Dashboard
