import React, { ReactElement } from 'react'
import './index.scss'

interface CealProps {
  no: number
  name: string
  isSelected: boolean
  onClickEvent?: React.MouseEventHandler<HTMLDivElement>
}
const Ceal = ({
  no,
  name,
  isSelected,
  onClickEvent,
}: CealProps): ReactElement => {
  return (
    <div
      className={`ceal ${isSelected ? 'selected ' : ''}pokemon-sprite-${no}`}
      data-cy={`ceal_button_${no}`}
      onClick={onClickEvent}
    >
      <div>
        no. {no} <br /> {name}
      </div>
    </div>
  )
}

export default Ceal
