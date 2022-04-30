import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import PokemonList from '@features/PokemonList'

const List = (): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="list-wrapper">
      <div className="list-layout">
        <span className="title">띠부띠부씰 종류</span>
        <div className="search">
          <input type="text" />
          <input type="button" value="search" />
        </div>

        <PokemonList />
        <br />
        <button onClick={goBack}>preview</button>
      </div>
    </div>
  )
}

export default List
