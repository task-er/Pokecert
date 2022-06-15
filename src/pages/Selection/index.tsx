import React, { ReactElement } from 'react'
import './index.scss'
import PokemonList from '@features/PokemonList'
import PageTop from '@features/PageTop'

const Selection = (): ReactElement => {
  return (
    <section className="selection-wrapper">
      <div className="selection-layout">
        <PageTop title="띠부띠부씰 선택" />
        <PokemonList />
      </div>
    </section>
  )
}

export default Selection
