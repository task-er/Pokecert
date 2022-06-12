import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Route from './Route'
import '@assets/styles/reset.css'
import '@assets/styles/common.scss'
import store from './redux/config'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
