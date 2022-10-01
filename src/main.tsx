import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PlayerVideoProvider } from './context/PlayerVideoContext'
import './style/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PlayerVideoProvider>
      <App />
    </PlayerVideoProvider>
  </React.StrictMode>
)
