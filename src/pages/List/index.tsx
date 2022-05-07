import React, { ReactElement } from 'react'
import './index.scss'
import PokemonList from '@features/PokemonList'
import PageTop from '@features/PageTop'

const List = (): ReactElement => {
  return (
    <div className="list-wrapper">
      <div className="list-layout">
        <PageTop />
        <PokemonList />
      </div>
    </div>
  )
}

export default List
