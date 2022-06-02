import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import './index.scss'
import SearchBox from '@components/SearchBox'
import { useAppSelector } from '@redux/config'

interface PageTopProps {
  title: string
}
const PageTop = ({ title }: PageTopProps): ReactElement => {
  const navigate = useNavigate()
  const { isComplete } = useAppSelector((state) => state.checkIsCompleteSlice)

  const moveToComplete = (): void => {
    navigate('/complete')
  }

  const moveToHome = (): void => {
    navigate('/')
  }

  return (
    <div className="page-top-layout">
      {isComplete && (
        <button className="move-complete-button" onClick={moveToComplete}>
          다 모았다!
        </button>
      )}
      <PageTitle title={title} />
      <button onClick={moveToHome}>◀ 이전</button>
      <SearchBox />
    </div>
  )
}

export default PageTop
