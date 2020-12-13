import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import ReactLoading from 'react-loading'
import { Container, Header, Titles, List, ServersList, Loading } from './styles'
import { BsServer } from 'react-icons/bs'
import { cloudApi } from '../../services/cloudApi'
import { SearchServer } from 'shared/SearchServiceContenxt'

export interface IServer {
  Instance: string
  InstanceId: string
  InstanceType: string
  LaunchTime: string
  PrivateIpAddress: string
  InstanceState: string
}

const Dashboard: React.FC = () => {
  const [servers, setServers] = useState<IServer[]>([])
  const [searchServer, setSearchServer] = useState<IServer[]>([])

  const { server } = useContext(SearchServer)

  useEffect(() => {
    cloudApi.get('/').then((result) => {
      setServers(result.data)
    })
  }, [])

  useEffect(() => {
    const regex = new RegExp(`${server}`, 'gi')
    const servera = servers.filter((server) => server.Instance.match(regex))
    setSearchServer(servera)
  }, [server])

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Loading load={servers.length < 1}>
        <h1>Carregando</h1>
        <ReactLoading type="balls" color="#ffffff" height={100} width={250} />
      </Loading>
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
          <p>STATUS</p>
        </Titles>

        {server !== '' ? (
          <ServersList>
            {searchServer?.map((server) => (
              <List key={server.InstanceId}>
                <p>{server.InstanceId}</p>
                <p>{server.Instance}</p>
                <p>{server.InstanceType}</p>
                <p>{server.LaunchTime}</p>
                <p>{server.PrivateIpAddress}</p>
                <p>{server.InstanceState}</p>
              </List>
            ))}
          </ServersList>
        ) : (
          <ServersList>
            {servers?.map((server) => (
              <List key={server.InstanceId}>
                <p>{server.InstanceId}</p>
                <p>{server.Instance}</p>
                <p>{server.InstanceType}</p>
                <p>{server.LaunchTime}</p>
                <p>{server.PrivateIpAddress}</p>
                <p>{server.InstanceState}</p>
              </List>
            ))}
          </ServersList>
        )}
      </Container>
    </>
  )
}

export default Dashboard
