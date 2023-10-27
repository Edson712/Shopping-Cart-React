import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './CartApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CartApp />
    </React.StrictMode>,
  </BrowserRouter>
)
