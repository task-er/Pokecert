import React, { ReactElement } from 'react'
import './index.scss'
import PokemonList from '@features/PokemonList'
import MedalList from '@features/MedalList'
import PageTop from '@features/PageTop'

const Collection = (): ReactElement => {
  return (
    <div className="collection-wrapper">
      <div className="collection-layout">
        <PageTop title="보관함" />
        <PokemonList isLock />
        <MedalList />
      </div>
    </div>
  )
}

export default Collection
