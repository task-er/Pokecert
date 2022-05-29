import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import './index.scss'
import SearchBox from '@components/SearchBox'

interface PageTopProps {
  title: string
}
const PageTop = ({ title }: PageTopProps): ReactElement => {
  const navigate = useNavigate()

  const moveToHome = () => {
    navigate('/')
  }

  return (
    <div className="page-top-layout">
      <PageTitle title={title} />
      <button onClick={moveToHome}>◀ 이전</button>
      <SearchBox />
    </div>
  )
}

export default PageTop
