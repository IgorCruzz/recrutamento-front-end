import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import ReactLoading from 'react-loading'
import { Container, Header, Titles, List, ServersList, Loading } from './styles'
import { BsServer } from 'react-icons/bs'
import { cloudApi } from '../../services/cloudApi'
import { SearchServer } from 'shared/SearchServiceContenxt'
import Chart from '../../components/chart'

export interface IServer {
  Instance: string
  InstanceId: string
  InstanceType: string
  LaunchTime: string
  PrivateIpAddress: string
  InstanceState: string
  cpu: number
  ram: number
}

const Dashboard: React.FC = () => {
  const [servers, setServers] = useState<IServer[]>([])
  const [searchServer, setSearchServer] = useState<IServer[]>([])
  const [serversStat, setServersStat] = useState({ On: 0, Off: 0 })

  const { server } = useContext(SearchServer)

  useEffect(() => {
    cloudApi.get('/').then((result) => {
      const serverList = result.data.map((servers: any) => {
        return {
          ...servers,
          cpu: Math.floor(Math.random() * 4) + 1,
          ram: Math.floor(Math.random() * 9) + 2,
        }
      })
      setServers(serverList)
    })
  }, [])

  useEffect(() => {
    const regex = new RegExp(`${server}`, 'gi')
    const servera = servers.filter((server) => server.Instance.match(regex))
    setSearchServer(servera)
  }, [server])

  useEffect(() => {
    const serverOn = servers.filter((server) => server.InstanceState === 'On')
      .length

    const serverOff = servers.filter((server) => server.InstanceState === 'Off')
      .length

    setServersStat({
      On: serverOn,
      Off: serverOff,
    })
  }, [servers])

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
          <header>
            <strong>/dashboard</strong>

            <h1>
              <BsServer />
              Lista de servidores
            </h1>
            <p>
              Servidores online: <strong>{serversStat.On}</strong>{' '}
            </p>
            <p>
              Servidores offline:<strong>{serversStat.Off}</strong>{' '}
            </p>
          </header>

          <Chart serverData={servers} />
        </Header>

        <Titles>
          <p>ID</p>
          <p>INSTANCIA</p>
          <p>TIPO</p>
          <p>TEMPO</p>
          <p>IP PRIVADO</p>
          <p>CPU</p>
          <p>MEMORIA RAM</p>
          <p>STATUS</p>
        </Titles>

        {server !== '' ? (
          <ServersList>
            {searchServer?.map((server) => (
              <List key={server.InstanceId}>
                <p>
                  <small>ID:</small>
                  {server.InstanceId}
                </p>
                <p>
                  <small>INSTANCIA:</small>
                  {server.Instance}
                </p>
                <p>
                  <small>TIPO:</small>
                  {server.InstanceType}
                </p>
                <p>
                  <small>IP PRIVADO:</small>
                  {server.LaunchTime}
                </p>
                <p>
                  <small>TEMPO:</small>
                  {server.PrivateIpAddress}
                </p>
                <p>
                  <small>CPU:</small>
                  {server.cpu}
                </p>
                <p id="ram">
                  <small>MEMORIA RAM:</small>
                  {server.InstanceState}
                </p>
                <p>
                  <small>STATUS:</small>
                  {server.InstanceState}
                </p>
              </List>
            ))}
          </ServersList>
        ) : (
          <ServersList>
            {servers?.map((server) => (
              <List key={server.InstanceId}>
                <p>
                  <small>ID:</small>
                  {server.InstanceId}
                </p>
                <p>
                  <small>INSTANCIA:</small>
                  {server.Instance}
                </p>
                <p>
                  <small>TIPO:</small>
                  {server.InstanceType}
                </p>
                <p>
                  <small>IP PRIVADO:</small>
                  {server.LaunchTime}
                </p>
                <p>
                  <small>TEMPO:</small>
                  {server.PrivateIpAddress}
                </p>
                <p>
                  <small>CPU:</small>
                  {server.cpu}
                </p>
                <p>
                  <small>MEMORIA RAM:</small>
                  {server.ram}
                </p>
                <p>
                  <small>STATUS:</small>
                  {server.InstanceState}
                </p>
              </List>
            ))}
          </ServersList>
        )}
      </Container>
    </>
  )
}

export default Dashboard
