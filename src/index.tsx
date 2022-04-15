import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Route from './Route'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
