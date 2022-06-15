import React, { ReactElement } from 'react'
import './index.scss'

interface NumberOfAvailableProps {
  current: number
  max: number
}
const NumberOfAvailable = ({
  current,
  max,
}: NumberOfAvailableProps): ReactElement => {
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
