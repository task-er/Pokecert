import React, { ReactElement } from 'react'
import Button from '@components/Button'
import MainImage from '@components/MainImage'
import mew from '@assets/images/mew.png'
import mewtwo from '@assets/images/mewtwo.png'
import './index.scss'

const HomeButtonList = (): ReactElement => {
  return (
    <div className="home-button-list-layout">
      <h1 className="main-title">POKECERT</h1>
      <MainImage src={mewtwo} alt="character1" />
      <MainImage src={mew} alt="character2" />

      <Button page="/list" value="띠부띠부씰 선택" />
      <Button page="/collection" value="보관함" />
    </div>
  )
}

export default HomeButtonList
