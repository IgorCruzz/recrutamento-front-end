import React, { useState, useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'
import * as dateFns from 'date-fns'
import { Container } from './styles'

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

const Chart: React.FC<any> = ({ mapeando }) => {
  const [servers, setServers] = useState<any[]>([])

  useEffect(() => {
    const serverList = mapeando
      .map((server: any) => {
        const checkState =
          server.InstanceState === 'On' ? dateFns.getHours(new Date()) * 10 : 0

        return {
          id: server.InstanceId,
          label: server.Instance,
          value: server.ram * 5 + server.cpu * 3 + checkState,
          color: 'hsl(193, 70%, 50%)',
        }
      })
      .sort((a: any, b: any): any => {
        return b.value - a.value
      })
      .slice(0, 10)
    console.log(serverList)
    setServers(serverList)
  }, [mapeando])

  return (
    <Container>
      <p>10 servidores com mais gastos diários(até o momento)</p>
      <ResponsivePie
        data={servers}
        valueFormat=" >-$0,~"
        margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 2.6]] }}
        sortByValue={true}
        radialLabel={function (e) {
          return e.label
        }}
        radialLabelsTextXOffset={15}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={-15}
        radialLabelsLinkHorizontalLength={9}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        sliceLabelsRadiusOffset={0.6}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 1,
            padding: 1,
            stagger: true,
          },
        ]}
        fill={[]}
        legends={[]}
      />
    </Container>
  )
}

export default Chart
