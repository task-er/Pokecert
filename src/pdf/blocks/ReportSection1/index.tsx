import React, { ReactElement } from 'react'
import FIRE_CRACKER from '../../images/firecracker.png'
import './index.scss'

const ReportSection1 = (): ReactElement => {
  return (
    <div className="report-section1">
      축하합니다! 모든 띠부띠부씰을 다 모았습니다!
      <img src={FIRE_CRACKER} width={80} height={80} />
    </div>
  )
}

export default ReportSection1
