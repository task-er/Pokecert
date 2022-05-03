import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import './index.scss'
import SearchBox from '@components/SearchBox'

const PokemonList = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="page-top-layout">
      <PageTitle title="띠부띠부씰 종류" />
      <button onClick={goBack}>◀ 이전</button>
      <SearchBox />
    </div>
  )
}

export default PokemonList
