import CompleteButtonList from '@features/CompleteButtonList'
import React, { ReactElement } from 'react'
import './index.scss'

// note: 해당 페이지는 컬렉션 완료되면 이동되는 페이지로, pdf를 다운받을 수 있다.
const Complete = (): ReactElement => {
  return (
    <div className="complete-wrapper">
      <CompleteButtonList />
    </div>
  )
}

export default Complete
