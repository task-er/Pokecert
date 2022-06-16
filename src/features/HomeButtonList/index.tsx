import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router'
import MainImage from '@components/MainImage'
import mew from '@assets/images/mew.png'
import mewtwo from '@assets/images/mewtwo.png'
import './index.scss'

const HomeButtonList = (): ReactElement => {
  const navigate = useNavigate()

  const moveToSelectionPage = (): void => {
    navigate('/selection')
  }
  const moveToCollectionPage = (): void => {
    navigate('/collection')
  }

  return (
    <div className="home-button-list-layout">
      <h1 className="main-title" data-cy="home_title_label">
        POKECERT
      </h1>
      <MainImage src={mewtwo} width={409} height={434} alt="character1" />
      <MainImage src={mew} width={466} height={531} alt="character2" />

      <button
        className="styled-button"
        onClick={moveToSelectionPage}
        data-cy="home_selection_button"
      >
        띠부띠부씰 선택
      </button>
      <button
        className="styled-button"
        onClick={moveToCollectionPage}
        data-cy="home_collection_button"
      >
        보관함
      </button>
    </div>
  )
}

export default HomeButtonList
