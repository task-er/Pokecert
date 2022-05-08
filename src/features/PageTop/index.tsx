import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '@components/PageTitle'
import './index.scss'
import SearchBox from '@components/SearchBox'

interface PokemonListProps {
  title: string
}
const PokemonList = ({ title }: PokemonListProps): ReactElement => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="page-top-layout">
      <PageTitle title={title} />
      <button onClick={goBack}>◀ 이전</button>
      <SearchBox />
    </div>
  )
}

export default PokemonList
