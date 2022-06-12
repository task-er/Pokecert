import React, { ReactElement, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '@pages/Home'
import List from '@pages/List'
import Collection from '@pages/Collection'

const Complete = lazy(() => import('@pages/Complete'))

// note: Switch 대신 Routes를 사용하고 Route의 Component 대신 element를 사용해야 한다.
// note: exact 키워드 대신 *을 사용하여 특정한다.
// react-router-dom v6를 사용한다.
const App = (): ReactElement => (
  <Suspense fallback={<div>loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/List" element={<List />} />
      <Route path="/Collection" element={<Collection />} />
      <Route path="/Complete" element={<Complete />} />
      <Route path="/*" element={<>Not Found.</>} />
    </Routes>
  </Suspense>
)

export default App
