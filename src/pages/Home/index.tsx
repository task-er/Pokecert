import React, { ReactElement } from 'react'
import mu from '@assets/images/mu.png'
// note: useHistory 대신 useNavigate 사용
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Home = (): ReactElement => {
  const navigate = useNavigate()

  const moveToList = () => {
    navigate('/List')
  }
  const moveToCollection = () => {
    navigate('/Collection')
  }
  const moveToSelection = () => {
    navigate('/Selection')
  }

  return (
    <div className="home">
      <img src={mu} alt="character1" />
      <p>Pokecert.</p>
      <button onClick={moveToList}>띠부띠부씰 종류 보기</button>
      <button onClick={moveToCollection}>내가 가진 띠부띠부씰</button>
      <button onClick={moveToSelection}>보관함</button>
    </div>
  )
}

export default Home
