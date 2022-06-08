import React, { ReactElement } from 'react'
import MYEONGSOO_ZION from '../../images/myeongsoo-zion.png'
import './index.scss'

const ReportSection2 = (): ReactElement => {
  return (
    <section className="report-section2">
      <div className="percent">100 %</div>
      <img src={MYEONGSOO_ZION} width="560px" />
    </section>
  )
}

export default ReportSection2
