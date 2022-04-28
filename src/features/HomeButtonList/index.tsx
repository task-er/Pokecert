import React, { ReactElement } from 'react'
import Button from '@components/Button'
import Image from '@components/Image'
import mew from '@assets/images/mew.png'
import mewtwo from '@assets/images/mewtwo.png'
import './index.scss'

const HomeButtonList = (): ReactElement => {
  return (
    <div className="home-button-list-layout">
      <h1 className="main-title">POKECERT</h1>
      <Image src={mewtwo} alt="character1" />
      <Image src={mew} alt="character2" />

      <Button page="/list" value="띠부띠부씰 종류 보기" />
      <Button page="/Collection" value="내가 가진 띠부띠부씰" />
      <Button page="/Selection" value="보관함" />
    </div>
  )
}

export default HomeButtonList
