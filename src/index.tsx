import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './app/server'

import './index.css'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
