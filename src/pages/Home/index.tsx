import React, { ReactElement } from 'react'
import mu from '@assets/images/mu.png'
// note: useHistory 대신 useNavigate 사용
import HomeButtonList from '@features/HomeButtonList'
import './index.scss'
import Image from '@components/Image'

const Home = (): ReactElement => {
  return (
    <div className="home-wrapper">
      <div className="home-layout">
        <Image src={mu} alt="character1" />
        <Image src={mu} alt="character2" />
        <HomeButtonList />
      </div>
    </div>
  )
}

export default Home
