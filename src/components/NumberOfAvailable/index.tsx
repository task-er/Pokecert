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
    <span className="number-of-available">
      ({current} / {max})&nbsp;
    </span>
  )
}

export default NumberOfAvailable
