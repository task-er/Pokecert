import React, { ReactElement } from 'react'
import Button from '@components/Button'
import './index.scss'

const HomeButtonList = (): ReactElement => {
  return (
    <div className="home-button-list-layout">
      <Button page="/list" value="띠부띠부씰 종류 보기" />
      <Button page="/Collection" value="내가 가진 띠부띠부씰" />
      <Button page="/Selection" value="보관함" />
    </div>
  )
}

export default HomeButtonList
