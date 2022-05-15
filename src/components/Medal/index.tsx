import React, { ReactElement } from 'react'
import './index.scss'

interface MedalProps {
  id: number
  onClickEvent?: React.MouseEventHandler<HTMLDivElement>
}
const Medal = ({ id, onClickEvent }: MedalProps): ReactElement => {
  return (
    <div className="medal" onClick={onClickEvent}>
      <div>{id}</div>
    </div>
  )
}

export default Medal
