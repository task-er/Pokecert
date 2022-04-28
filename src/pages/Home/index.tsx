import React, { ReactElement } from 'react'
// note: useHistory 대신 useNavigate 사용
import HomeButtonList from '@features/HomeButtonList'
import './index.scss'

const Home = (): ReactElement => {
  return (
    <div className="home-wrapper">
      <HomeButtonList />
    </div>
  )
}

export default Home
