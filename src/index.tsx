import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Route from './Route'
import Footer from '@features/Footer'
import '@assets/styles/reset.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
