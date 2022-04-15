import React, { ReactElement } from 'react'
import '@dir/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Selection from './pages/SelectionPage'

// note: Switch 대신 Routes를 사용하고 Route의 Component 대신 element를 사용해야 한다.
// note: exact 키워드 대신 *을 사용하여 특정한다.
// react-router-dom v6를 사용한다.
const App = (): ReactElement => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Selection" element={<Selection />} />
      <Route element={<>Not Found.</>} />
    </Routes>
  </>
)

export default App
