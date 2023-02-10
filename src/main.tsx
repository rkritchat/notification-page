import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NotificationProvider } from './context/Notification'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NotificationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NotificationProvider>
)
