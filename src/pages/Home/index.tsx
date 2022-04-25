import React, { ReactElement } from 'react'
import mu from '@assets/images/mu.png'
// note: useHistory 대신 useNavigate 사용
import './index.scss'
import Button from '@components/Button'

const Home = (): ReactElement => {
  return (
    <div className="home-wrapper">
      <div className="home-layout">
        <img src={mu} alt="character1" className="main-character" />
        <img src={mu} alt="character1" className="main-character" />

        <Button page="/list" value="띠부띠부씰 종류 보기" />
        <Button page="/Collection" value="내가 가진 띠부띠부씰" />
        <Button page="/Selection" value="보관함" />
      </div>
    </div>
  )
}

export default Home
