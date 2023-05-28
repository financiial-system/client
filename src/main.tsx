import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/userContext'
import { TransactionsProvider } from './providers/transactionsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransactionsProvider>
      <UserProvider>
        <GlobalStyle/>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </UserProvider>
    </TransactionsProvider>
  </React.StrictMode>,
)
