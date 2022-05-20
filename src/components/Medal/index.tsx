import { MedalType } from '@commons/types'
import React, { ReactElement } from 'react'
import './index.scss'

interface MedalProps {
  medal: MedalType
  onClickEvent?: React.MouseEventHandler<HTMLDivElement>
}
const Medal = ({ medal, onClickEvent }: MedalProps): ReactElement => {
  return (
    <div className="medal" onClick={onClickEvent}>
      <div className="medal-image">&nbsp;</div>
      <div className="medal-info">
        <h3>{medal.name}</h3>
        <p>{medal.content}</p>
      </div>
    </div>
  )
}

export default Medal
