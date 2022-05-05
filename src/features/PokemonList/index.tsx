import React, { ReactElement } from 'react'
import './index.scss'
import { pokemons } from '@commons/pokemon.json'
import Ceal from '@components/Ceal'
import { PokemonType } from '@commons/types'

// TODO: redux로 대체 필요.
// TODO: 각 locationStorage나 redux-persist로 대체 필요
interface PokemonListProps {
  keyword: string
}
const PokemonList = ({ keyword }: PokemonListProps): ReactElement => {
  const extracted = pokemons.filter((pokemon: PokemonType) => {
    const regex = new RegExp(keyword)
    return regex.test(pokemon.name)
  })

  return (
    <div className="pokemon-list-layout">
      {extracted.map((pokemon: PokemonType, idx: number) => {
        return <Ceal key={idx} {...pokemon} />
      })}
    </div>
  )
}

export default PokemonList
