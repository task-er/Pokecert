import React, { ReactElement } from 'react'
import './index.scss'

interface PageTitleProps {
  title: string
}
const PageTitle = ({ title }: PageTitleProps): ReactElement => {
  return <span className="page-title">{title}</span>
}

export default PageTitle
