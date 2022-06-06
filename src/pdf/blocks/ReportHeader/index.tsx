import React, { ReactElement } from 'react'
import POKEBALL from '@assets/images/pokeball.png'
import './index.scss'

const ReportHeader = (): ReactElement => {
  return (
    <div className="report-header">
      <img src={POKEBALL} />
      Pokecert
    </div>
  )
}

export default ReportHeader
