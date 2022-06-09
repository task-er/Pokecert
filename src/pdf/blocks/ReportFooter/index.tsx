import DateGenerator from '@commons/DateGenerator'
import React, { ReactElement } from 'react'
import './index.scss'

const ReportFooter = (): ReactElement => {
  return (
    <footer className="report-footer">
      <span>인증 시각: {new DateGenerator().generate()}</span>
      <span>Created by github.com/task-er</span>
    </footer>
  )
}

export default ReportFooter
