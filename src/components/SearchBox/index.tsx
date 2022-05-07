import React, { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/config'
import { findPokemon } from '../../store/findPokemonSlice'
import './index.scss'

const SearchBox = (): ReactElement => {
  const { keyword } = useAppSelector((state) => state.findPokemonSlice)
  const dispatch = useAppDispatch()

  // TODO: throttling 처리로 변경.
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={keyword}
        onChange={(e) => dispatch(findPokemon(e.target.value))}
      />
      <input type="button" value="🔎검색" />
    </div>
  )
}

export default SearchBox
