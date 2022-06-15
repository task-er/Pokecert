import React, { ReactElement } from 'react'
import './index.scss'

interface PageTitleProps {
  title: string
}
const PageTitle = ({ title }: PageTitleProps): ReactElement => {
  return (
    <span className="page-title" data-cy="selection_title_label">
      {title}
    </span>
  )
}

export default PageTitle
