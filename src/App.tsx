import React, { ReactElement } from 'react'
import pokeball from './pokeball.png'
import '@dir/App.css'

const App = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
        <p>Pokecert.</p>
      </header>
    </div>
  )
}

export default App
