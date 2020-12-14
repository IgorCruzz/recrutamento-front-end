import React, { useState, useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'

const Container = styled.div`
  width: 450px;
  height: 450px;
`
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

interface Props extends RouteComponentProps {
  mapeando: IServer[]
}

const Chart: React.FC<any> = ({ mapeando }) => {
  const [servers, setServers] = useState<any[]>([])

  useEffect(() => {
    const serverList = mapeando
      .map((server: any) => {
        return {
          id: server.InstanceId,
          label: server.Instance,
          value: Math.floor(Math.random() * 9) + 2,
          color: 'hsl(193, 70%, 50%)',
        }
      })
      .sort((a: any, b: any): any => {
        return b.value - a.value
      })
      .slice(0, 10)

    setServers(serverList)
  }, [mapeando])

  return (
    <Container>
      <ResponsivePie
        data={servers}
        margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.6}
        cornerRadius={3}
        colors={{ scheme: 'purple_orange' }}
        borderColor={{ from: 'color', modifiers: [['darker', 2.6]] }}
        radialLabelsTextXOffset={15}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={-16}
        radialLabelsLinkHorizontalLength={9}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        sliceLabelsRadiusOffset={0.6}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#faeeee"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 9,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[]}
      />
    </Container>
  )
}

export default Chart
