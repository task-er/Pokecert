import React, { ReactElement, useMemo } from 'react'
import './index.scss'
import { pokemons } from '@commons/pokemon.json'

interface NumberOfAvailableProps {
  current: number
  max: number
}
const NumberOfAvailable = ({
  current,
}: NumberOfAvailableProps): ReactElement => {
  const max = useMemo<number>((): number => pokemons.length, [])

  return (
    <span
      className="number-of-available"
      data-cy="selection_number_of_pokemons_label"
    >
      ({current} / {max})&nbsp;
    </span>
  )
}

export default NumberOfAvailable
