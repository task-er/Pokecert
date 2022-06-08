import React, { ReactElement } from 'react'
// note: useHistory 대신 useNavigate 사용
import HomeButtonList from '@features/HomeButtonList'
import './index.scss'

const Home = (): ReactElement => {
  return (
    <section className="home-wrapper">
      <HomeButtonList />
    </section>
  )
}

export default Home
