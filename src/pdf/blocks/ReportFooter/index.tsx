import React, { ReactElement } from 'react'
import './index.scss'

const ReportFooter = (): ReactElement => {
  return (
    <div className="report-footer">
      <div>인증시각: </div>
      <span>2021-05-26 15:36</span>
      <span>Created by github.com/task-er</span>
    </div>
  )
}

export default ReportFooter
