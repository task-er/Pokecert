import React, { ReactElement, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import './index.scss'
import SearchBox from '@components/SearchBox'
import { useAppSelector } from '@redux/config'
import NumberOfAvailable from '@components/NumberOfAvailable'

interface PageTopProps {
  title: string
}
const PageTop = ({ title }: PageTopProps): ReactElement => {
  const navigate = useNavigate()
  const { isComplete } = useAppSelector((state) => state.checkIsCompleteSlice)
  const { selectedPokemons } = useAppSelector(
    (state) => state.selectPokemonSlice,
  )

  const moveToComplete = useCallback((): void => {
    navigate('/complete')
  }, [])

  const moveToHome = useCallback((): void => {
    navigate('/')
  }, [])

  const CompleteButton = useMemo((): ReactElement | false => {
    return (
      isComplete && (
        <button
          className="move-complete-button"
          onClick={moveToComplete}
          data-cy="selection_complete_button"
        >
          다 모았다!
        </button>
      )
    )
  }, [isComplete])

  return (
    <div className="page-top-layout">
      {CompleteButton}
      <div className="page-top-right">
        <NumberOfAvailable current={selectedPokemons.size} max={159} />
        <PageTitle title={title} />
      </div>
      <button onClick={moveToHome} data-cy="selection_preview_button">
        ◀ 이전
      </button>
      <SearchBox />
    </div>
  )
}

export default PageTop
