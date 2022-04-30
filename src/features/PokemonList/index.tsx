import React, { ReactElement } from 'react'
import './index.scss'
import { pokemons } from '@commons/pokemon.json'
import Ceal from '@components/Ceal'
import { PokemonType } from '@commons/types'

const PokemonList = (): ReactElement => (
  <div className="pokemon-list-layout">
    {pokemons.map((pokemon: PokemonType, idx: number) => {
      return <Ceal key={idx} {...pokemon} />
    })}
  </div>
)

export default PokemonList
