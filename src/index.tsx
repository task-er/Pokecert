import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Route from './Route'
import Footer from '@features/Footer'
import '@assets/styles/reset.css'
import { Provider } from 'react-redux'
import store from './store/config'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
