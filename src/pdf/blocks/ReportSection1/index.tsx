import React, { ReactElement } from 'react'
import FIRE_CRACKER from '@report-images/firecracker.png'
import './index.scss'

const ReportSection1 = (): ReactElement => {
  return (
    <section className="report-section1">
      <img
        className="rotate-50 flipH"
        src={FIRE_CRACKER}
        width={80}
        height={80}
      />
      <span>축하합니다!</span>
      <img className="rotate-255" src={FIRE_CRACKER} width={80} height={80} />
      <img
        className="rotate-15 flipH"
        src={FIRE_CRACKER}
        width={80}
        height={80}
      />
      <img src={FIRE_CRACKER} width={80} height={80} />
    </section>
  )
}

export default ReportSection1
