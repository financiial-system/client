import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/userContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle/>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)
