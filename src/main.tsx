import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './shared/i18n/i18n'
import App from './App'
import './style.css'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element "#root" not found')

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
