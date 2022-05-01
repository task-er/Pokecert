import React, { ReactElement } from 'react'
import './index.scss'

interface PageTitleProps {
  title: string
}
const PageTitle = ({ title }: PageTitleProps): ReactElement => (
  <div className="page-title">{title}</div>
)

export default PageTitle
