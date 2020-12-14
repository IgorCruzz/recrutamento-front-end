import 'babel-polyfill'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import React from 'react'
import Dashboard from '../../pages/dashboard'
import { cloudApi } from '../../services/cloudApi'

const apiMock = new MockAdapter(cloudApi)

jest.mock('react-redux')

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

describe('Dashboard', () => {
  it('should be able to render', async () => {
    apiMock.onGet('/').reply(200, [
      {
        Instance: 'Instance',
        InstanceId: 'InstanceId',
        InstanceType: 'InstanceType',
        LaunchTime: 'LaunchTime',
        PrivateIpAddress: 'PrivateIpAddress',
        InstanceState: 'On',
      },
      {
        Instance: 'Instance',
        InstanceId: 'InstanceId',
        InstanceType: 'InstanceType',
        LaunchTime: 'LaunchTime',
        PrivateIpAddress: 'PrivateIpAddress',
        InstanceState: 'Off',
      },
    ])

    render(<Dashboard />)

    await screen.findByText('Lista de servidores')

    expect(screen.getByText('Lista de servidores')).toBeTruthy()
  })
})
