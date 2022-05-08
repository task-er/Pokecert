import React, { ReactElement } from 'react'
import './index.scss'
import PokemonList from '@features/PokemonList'
import PageTop from '@features/PageTop'

const Collection = (): ReactElement => {
  return (
    <div className="collection-wrapper">
      <div className="collection-layout">
        <PageTop title="내가 모은 띠부띠부씰" />
        <PokemonList />
      </div>
    </div>
  )
}

export default Collection
