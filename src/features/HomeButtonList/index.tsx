import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router'
import MainImage from '@components/MainImage'
import mew from '@assets/images/mew.png'
import mewtwo from '@assets/images/mewtwo.png'
import './index.scss'

const HomeButtonList = (): ReactElement => {
  const navigate = useNavigate()

  const moveToListPage = (): void => {
    navigate('/list')
  }
  const moveToCollectionPage = (): void => {
    navigate('/collection')
  }

  return (
    <div className="home-button-list-layout">
      <h1 className="main-title">POKECERT</h1>
      <MainImage src={mewtwo} width={409} height={434} alt="character1" />
      <MainImage src={mew} width={466} height={531} alt="character2" />

      <button className="styled-button" onClick={moveToListPage}>
        띠부띠부씰 선택
      </button>
      <button className="styled-button" onClick={moveToCollectionPage}>
        보관함
      </button>
    </div>
  )
}

export default HomeButtonList
