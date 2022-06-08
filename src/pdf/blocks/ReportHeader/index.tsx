import React, { ReactElement } from 'react'
import POKEBALL from '@assets/images/pokeball.png'
import './index.scss'

const ReportHeader = (): ReactElement => {
  return (
    <header className="report-header">
      <img src={POKEBALL} />
      Pokecert
    </header>
  )
}

export default ReportHeader
