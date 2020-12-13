import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import './config/ReactotronConfig'
import Routes from './routes'
import { store, persistor } from './store'
import GlobalStyle from '../src/shared/styles/global'
import { SearchServer } from './shared/SearchServiceContenxt'

function App() {
  const [server, setServer] = useState('')

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SearchServer.Provider
          value={{
            server,
            setServer,
          }}>
          <Router>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </SearchServer.Provider>
      </PersistGate>
    </Provider>
  )
}

export default App
