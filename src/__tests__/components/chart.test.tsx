import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import Chart from '../../components/chart'

jest.mock('react-redux')

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

describe('Chart', () => {
  it('should be able to render', () => {
    expect(
      render(
        <Chart
          serverData={[
            {
              Instance: 'Instance',
              InstanceId: 'InstanceId',
              InstanceType: 'InstanceType',
              LaunchTime: 'LaunchTime',
              PrivateIpAddress: 'PrivateIpAddress',
              InstanceState: 'On',
              cpu: 3,
              ram: 2,
            },
            {
              Instance: 'Instance',
              InstanceId: 'InstanceId',
              InstanceType: 'InstanceType',
              LaunchTime: 'LaunchTime',
              PrivateIpAddress: 'PrivateIpAddress',
              InstanceState: 'Off',
              cpu: 3,
              ram: 2,
            },
          ]}
        />
      )
    ).toBeTruthy()
  })
})
