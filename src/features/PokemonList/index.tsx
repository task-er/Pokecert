import React, { ReactElement } from 'react'
import './index.scss'
import { pokemons } from '@commons/pokemon.json'
import Ceal from '@components/Ceal'
import { PokemonType } from '@commons/types'
import { useAppSelector } from '../../store/config'

// TODO: redux로 대체 필요.
// TODO: 각 locationStorage나 redux-persist로 대체 필요

const PokemonList = (): ReactElement => {
  const { keyword } = useAppSelector((state) => state.findPokemonSlice)

  const extracted = pokemons.filter((pokemon: PokemonType) => {
    const regex = new RegExp(keyword)
    return regex.test(pokemon.name)
  })

  return (
    <div className="pokemon-list-layout">
      {extracted.map((pokemon: PokemonType, idx: number) => {
        return <Ceal key={idx} {...pokemon} selected />
      })}
    </div>
  )
}

export default PokemonList
