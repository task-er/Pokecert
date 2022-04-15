import React, { ReactElement } from 'react'
import mu from '../mu.png'
import '@dir/App.css'
// note: useHistory 대신 useNavigate 사용
import { useNavigate } from 'react-router-dom'

const HomePage = (): ReactElement => {
  const navigate = useNavigate()

  const moveToSelection = () => {
    navigate('/selection')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={mu} className="App-logo" alt="logo" />
        <p>Pokecert.</p>
        <button onClick={moveToSelection}>Start</button>
      </header>
    </div>
  )
}

export default HomePage
