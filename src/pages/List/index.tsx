import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import PokemonList from '@features/PokemonList'
import SearchBox from '@components/SearchBox'
import PageTitle from '@components/PageTitle'

const List = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="list-wrapper">
      <div className="list-layout">
        <PageTitle title="띠부띠부씰 종류" />
        <SearchBox />
        <PokemonList />
        <br />
        <button onClick={goBack}>preview</button>
      </div>
    </div>
  )
}

export default List
